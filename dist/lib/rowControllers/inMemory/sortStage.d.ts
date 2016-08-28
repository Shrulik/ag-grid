// Type definitions for ag-grid-fastdom v5.2.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { RowNode } from "../../entities/rowNode";
export declare class SortStage {
    private gridOptionsWrapper;
    private sortController;
    private valueService;
    execute(rowNode: RowNode): any;
    private sortRowNode(rowNode, sortOptions);
    private compareRowNodes(sortOptions, nodeA, nodeB);
    private updateChildIndexes(rowNode);
}
