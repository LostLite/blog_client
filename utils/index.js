export const findByTestAttrib = (component, attrib) => {

    const wrapper = component.find(`[data-test='${attrib}']`);
    return wrapper;
};