// Generated with util/create-component.js
import React from "react";
import classNames from "classnames";
import {  Classes,AbstractPureComponent2 } from "../../common";
import { DrawerProps,DISPLAYNAME_PREFIX } from "./Drawer.types";
import {isPositionHorizontal,getPositionIgnoreAngles} from '../../common/position'
import Overlay from '../Overlay/Overlay'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'
import "./Drawer.scss";

/**
 * Drawers overlay content over existing parts of the UI and are anchored to the edge of the screen.
 * <br/>
 * Drawers can be brought from the top,bottom,left of right side of th screen.Size of the drawer can be modified using the size props.
 */
export class Drawer extends AbstractPureComponent2<DrawerProps> {
  public static displayName = `${DISPLAYNAME_PREFIX}.Drawer`;
  public static defaultProps: DrawerProps = {
      canOutsideClickClose: true,
      isOpen: false,
      position: null,
      style: {},
      vertical: false,
  };

  public static readonly SIZE_SMALL = "360px";
  public static readonly SIZE_STANDARD = "50%";
  public static readonly SIZE_LARGE = "90%";

  public render() {
      // eslint-disable-next-line deprecation/deprecation
      const { size, style, position, vertical } = this.props;
      const realPosition = position ? getPositionIgnoreAngles(position) : null;

      const classes = classNames(
          Classes.DRAWER,
          {
              [Classes.VERTICAL]: !realPosition && vertical,
              [realPosition ? Classes.positionClass(realPosition) : ""]: true,
          },
          this.props.className,
      );

      const styleProp =
          size == null
              ? style
              : {
                    ...style,
                    [(realPosition ? isPositionHorizontal(realPosition) : vertical) ? "height" : "width"]: size,
                };
      return (
          <Overlay {...this.props} className={Classes.OVERLAY_CONTAINER}>
              <div className={classes} style={styleProp}>
                  {this.maybeRenderHeader()}
                  {this.props.children}
              </div>
          </Overlay>
      );
  }
  
  protected validateProps(props: DrawerProps) {
      if (props.title == null) {
          if (props.icon != null) {
              console.log('DIALOG_WARN_NO_HEADER_ICON');
          }
          if (props.isCloseButtonShown != null) {
              console.log('DIALOG_WARN_NO_HEADER_CLOSE_BUTTON');
          }
      }
      if (props.position != null) {
          // eslint-disable-next-line deprecation/deprecation
          if (props.vertical) {
              console.log('DRAWER_VERTICAL_IS_IGNORED');
          }
          if (props.position !== getPositionIgnoreAngles(props.position)) {
              console.log('DRAWER_ANGLE_POSITIONS_ARE_CASTED');
          }
      }
  }

  private maybeRenderCloseButton() {
      // `isCloseButtonShown` can't be defaulted through default props because of props validation
      // so this check actually defaults it to true (fails only if directly set to false)
      if (this.props.isCloseButtonShown !== false) {
          return (
              <Button
                  aria-label="Close"
                  onClick={this.props.onClose}
                //   className={Classes.DIALOG_CLOSE_BUTTON}
                className='closeButton'
                intent='none'
                minimal={true}
              > ❌ </Button> 
           
          );
      } else {
          return null;
      }
  }

  private maybeRenderHeader() {
      const { icon, title } = this.props;
      if (title == null) {
          return null;
      }
      return (
          <div className={Classes.DRAWER_HEADER}>
              <Icon icon={icon} iconSize={Icon.SIZE_LARGE} />
              <h4>{title}</h4>
              {this.maybeRenderCloseButton()}
          </div>
      );
  }

}

export default Drawer;



