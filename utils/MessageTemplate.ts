export const Empty = (entitie: string, prefix = 'o') => {
  if (prefix == 'a') {
    return `Nenhum${prefix} ${entitie} foi encontrad${prefix}.`;
  }

  return `Nenhum ${entitie} foi encontrad${prefix}.`;
};

export const Error = (entitie: string) => {
  return `Erro ao carregar ${entitie}.`;
};

export const NotFound = (entitie: string) => {
  return `Não foi possível encontrar ${entitie}`
};
