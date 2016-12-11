declare module "table" {

  export interface TableColumn {
    alignment?: string; // Cell content alignment (enum: left, center, right) (default: left).
    width?: number; // Column width (default: auto).
    truncate?: number; // Number of characters are which the content will be truncated (default: Infinity).
    paddingLeft?: number; // Cell content padding width left (default: 1).
    paddingRight?: number; // Cell content padding width right (default: 1).
  }

  export interface TableBorder {
    topBody?: string;
    topJoin?: string;
    topLeft?: string;
    topRight?: string;
    bottomBody?: string;
    bottomJoin?: string;
    bottomLeft?: string;
    bottomRight?: string;
    bodyLeft?: string;
    bodyRight?: string;
    bodyJoin?: string;
    joinBody?: string;
    joinLeft?: string;
    joinRight?: string;
    joinJoin?: string;
  }

  export interface DrawJoin {
    (index?: number, size?: number): boolean;
  }

  export interface TableConfig {
    border?: TableBorder;
    columns?: TableColumn[];
    columnDefault?: TableColumn[];
    drawHorizontalLine: DrawJoin;
  }

  export function getBorderCharacters(name: string): TableBorder;
  export function table(rows: any[][], config: TableConfig): string;
  export function createStream(config: TableConfig): any;
}
