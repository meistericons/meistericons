import { toPascalCase } from "@meistericons/build-tools";
import * as React from "react";
import defaultAttributes from "./defaultAttributes";

export type IconNode = [
  elementName: keyof React.ReactSVG,
  attrs: Record<string, string>
][];

type SVGAttributes = Partial<React.SVGProps<SVGSVGElement>>;
type ComponentAttributes = React.RefAttributes<SVGSVGElement> & SVGAttributes;

export interface MeisterIconsProps extends ComponentAttributes {
  size?: string | number;
}

export type MeisterIcon = React.ForwardRefExoticComponent<MeisterIconsProps>;

const createMeisterIcons = (
  iconName: string,
  iconNode: IconNode
): MeisterIcon => {
  const Component = React.forwardRef<SVGSVGElement, MeisterIconsProps>(
    ({ color = "currentColor", size = 24, children, ...rest }: any, ref: any) =>
      React.createElement(
        "svg",
        {
          ref,
          width: size,
          height: size,
          className: `mni mni-${toPascalCase(iconName)}`,
          color,
          ...defaultAttributes,
          ...rest,
        },
        [
          ...iconNode.map(([tag, attrs]) => React.createElement(tag, attrs)),
          Array.isArray(children ?? [children]) || [],
        ]
      )
  );

  Component.displayName = iconName;

  return Component;
};

export default createMeisterIcons;