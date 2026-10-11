type AllType = {
      name: string;
      position: number;
      color: string;
      weight: number;
}
type AllType2 = Pick<AllType, 'name' | 'position' | 'color' | 'weight'>
function compare(top: Pick<AllType, 'name' | 'color'>, bottom: Pick<AllType, 'position' | 'weight'>): AllType {
    return {
        name: top.name,
        color: top.color,
        position: bottom.position,
        weight: bottom.weight
    };
}