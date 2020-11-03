module.exports = (componentName) => ({
  content: `// Generated with util/create-component.js
import React from "react";

import { ${componentName}Props } from "./${componentName}.types";

import "./${componentName}.scss";


export class ${componentName} extends React.Component<${componentName}Props> {
  render() {
    return (
      <div data-testid="${componentName}" className="foo-bar">{this.props.foo}</div>
    );
  }
}

export default ${componentName};

`,
  extension: `.tsx`,
});
