// type CardState = {
//   id: number;
//   position: Vector3;
// };

export class Card extends Entity {
  constructor(public id: number, model: GLTFShape, position: Vector3) {
    super();
    this.addComponent(model);
    this.addComponent(new Transform({ position, scale: new Vector3(5, 5, 5) }));
    engine.addEntity(this);
  }
}

export const cardShape = new GLTFShape('models/card.gltf');
