declare module "*.md" {
  const attributes: { [key: string]: string | string[] | {}[] };
  const react: React.FC<attributes>;
  const html: string;
  export { attributes, react, html };
}
