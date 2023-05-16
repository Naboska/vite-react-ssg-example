import {FC} from "react";

const pages = import.meta.glob('./pages/**/*.tsx', {eager: true});

export const routes = Object.entries(pages).map(([filePath, module]) => {
  const result = filePath.replace('./pages', '').replace('.tsx', '');

  return {
    path: result === '/index' ? '/' : result.replace('/index', ''),
    module: (module as Record<string, FC>).default,
  }
});