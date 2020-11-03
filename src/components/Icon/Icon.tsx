import classNames from "classnames";
import * as React from "react";
import {
  AbstractPureComponent2,
  DISPLAYNAME_PREFIX,
  Classes,
} from "../../common";
import { IIconProps, ICON, ICON_LARGE, ICON_STANDARD } from "./Icon.types";
import { IconSvgPaths16, IconSvgPaths20 } from "./IconSvgPaths";
import { IconName } from "./IconName";
import "./Icon.scss";

export class Icon extends AbstractPureComponent2<
  IIconProps & React.DOMAttributes<HTMLElement>
> {
  public static displayName = `${DISPLAYNAME_PREFIX}.Icon`;

  public static readonly SIZE_STANDARD = 16;
  public static readonly SIZE_LARGE = 20;

  public render(): JSX.Element | null {
    const { icon } = this.props;
    if (icon == null || typeof icon === "boolean") {
      return null;
    } else if (typeof icon !== "string") {
      return icon;
    }

    const {
      className,
      color,
      htmlTitle,
      iconSize = Icon.SIZE_STANDARD,
      intent,
      title = icon,
      tagName = "span",
      ...htmlprops
    } = this.props;

    // choose which pixel grid is most appropriate for given icon size
    const pixelGridSize =
      iconSize >= Icon.SIZE_LARGE ? Icon.SIZE_LARGE : Icon.SIZE_STANDARD;
    // render path elements, or nothing if icon name is unknown.
    const paths = this.renderSvgPaths(pixelGridSize, icon);

    const classes = classNames(
      ICON,
      Classes.iconClass(icon),
      Classes.intentClass(intent),
      className
    );
    const viewBox = `0 0 ${pixelGridSize} ${pixelGridSize}`;
    
    return React.createElement(
      tagName,
      {
        ...htmlprops,
        className: classes,
        title: htmlTitle,
      },
      <svg
        fill={color}
        data-icon={icon}
        width={iconSize}
        height={iconSize}
        viewBox={viewBox}
      >
        {title && <desc>{title}</desc>}
        {paths}
      </svg>
    );
  }

  /** Render `<path>` elements for the given icon name. Returns `null` if name is unknown. */
  private renderSvgPaths(
    pathsSize: number,
    iconName: IconName
  ): JSX.Element[] | null {
    const svgPathsRecord =
      pathsSize === Icon.SIZE_STANDARD ? IconSvgPaths16 : IconSvgPaths20;
    const pathStrings = svgPathsRecord[iconName];
    if (pathStrings == null) {
      return null;
    }
    return pathStrings.map((d, i) => <path key={i} d={d} fillRule="evenodd" />);
  }
}

export default Icon;
