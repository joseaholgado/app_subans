export const is_valid_obj_field = (obj) => {
    return Object.values(obj).every(value => value.trim() !== '')
}
export const update_error = (error, state_updater) => {
    state_updater(error)
    setTimeout(() => {
        state_updater('')
    }, 2500)
}

export const is_valid_email = (value) => {
    const regx = /^([A-Za-z0-9._-]+)@([A-Za-z0-9.-]+)\.([A-Za-z]{2,4})$/
    return regx.test(value);
}