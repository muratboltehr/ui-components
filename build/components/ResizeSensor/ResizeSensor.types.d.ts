export interface ResizeEntry {
    contentRect: DOMRectReadOnly;
    target: Element;
}
export interface ResizeSensorProps {
    onResize: (entries: ResizeEntry[]) => void;
    observeParents?: boolean;
}
