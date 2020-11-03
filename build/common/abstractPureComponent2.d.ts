import * as React from "react";
/**
 * An abstract component that Optum components can extend
 * in order to add some common functionality like runtime props validation.
 */
export declare abstract class AbstractPureComponent2<P, S = {}, SS = {}> extends React.PureComponent<P, S, SS> {
    componentWillUpdate: never;
    componentWillReceiveProps: never;
    componentWillMount: never;
    getDerivedStateFromProps: never;
    /** Component displayName should be `public static`. This property exists to prevent incorrect usage. */
    protected displayName: never;
    private timeoutIds;
    constructor(props: P, context?: any);
    componentDidUpdate(_prevProps: P, _prevState: S, _snapshot?: SS): void;
    componentWillUnmount(): void;
    /**
     * Set a timeout and remember its ID.
     * All stored timeouts will be cleared when component unmounts.
     * @returns a "cancel" function that will clear timeout when invoked.
     */
    setTimeout(callback: () => void, timeout?: number): () => void;
    /**
     * Clear all known timeouts.
     */
    clearTimeouts: () => void;
    /**
     * Ensures that the props specified for a component are valid.
     * Implementations should check that props are valid and usually throw an Error if they are not.
     * Implementations should not duplicate checks that the type system already guarantees.
     *
     * This method should be used instead of React's
     * [propTypes](https://facebook.github.io/react/docs/reusable-components.html#prop-validation) feature.
     * Like propTypes, these runtime checks run only in development mode.
     */
    protected validateProps(_props: P): void;
}
