/// <reference types="react" />
import * as React from 'react';
export interface Props {
    height: number;
}
declare const autoHeight: (WrappedComponent: React.ComponentClass<any>) => {
    new (props: any, context?: any): {
        root: Element | null;
        state: {
            computedHeight: number;
        };
        componentDidMount(): void;
        handleRoot: (node: Element | null) => void;
        render(): JSX.Element;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: any) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: (() => any) | undefined): void;
        forceUpdate(callBack?: (() => any) | undefined): void;
        props: any;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
};
export default autoHeight;
