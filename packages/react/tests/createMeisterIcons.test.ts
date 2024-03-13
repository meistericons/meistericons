import { describe, expect, test } from "vitest";
import path from "node:path";
import { readFileSync } from "node:fs";
import renderer from "react-test-renderer";
import { getCurrentDir, readSvgCode } from "@meistericons/build-tools";
import createMeisterIcons, { IconNode } from "../src/createMeisterIcons";
import { JSXElementConstructor, ReactElement } from "react";
import { Add } from '../icons'

function toJson(component: renderer.ReactTestRenderer) {
    const result = component.toJSON();
    expect(result).toBeDefined();
    expect(result).not.toBeInstanceOf(Array);
    return result as renderer.ReactTestRendererJSON;
}

describe("it should create a meistericons svg template in react", () => {
    const currentDir = getCurrentDir(import.meta.url);
    const iconNodes = readFileSync(
        path.resolve(currentDir, "../../../static/icon-nodes.json"),
        "utf-8"
    );

    const iconNode = Object.entries(JSON.parse(iconNodes))[1];

    const icon = (iconNode[1]);
    const iconElement = createMeisterIcons(
        Object.keys(icon as {})[0],
        Object.values(icon as {})[0] as IconNode
    ) as unknown as ReactElement<any, string | JSXElementConstructor<any>>;

    let tree;
    const component = renderer.create(iconElement.render({}))

    test("it should export IconNode", () => {
        expect(iconNode).toBeTruthy();
    });

    test("it should render Meistericons", () => {
        tree = toJson(component)
        expect(tree).toMatchSnapshot()
    });

    test("it should render icon of given size and color", () => {
        tree = toJson(component)
        tree.props.width = 48;
        tree.props.height = 48;
        tree.props.color = 'red';
        tree = toJson(component)
        expect(tree).toMatchSnapshot()
    });
});
