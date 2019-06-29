const ComponentFactory = {
    mappings: {},
    register: componentClass => ComponentFactory.mappings[componentClass.name] = componentClass,
    get: componentClassName => ComponentFactory.mappings[componentClassName],
  };
  export default ComponentFactory;
  