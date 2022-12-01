import instance from "./api.service"

const END_POINT = `/invoices`

const findAll = async () => {
    const response = await instance.get(END_POINT)
    return response.data
}

const findOneById = async (id) => {
    const response = await instance.get(`${END_POINT}/${id}`)
    return response.data
}

const create = async (credentials) => {
    const response = await instance.post(END_POINT, credentials)
    return response.data
}

const update = async (credentials) => {
    const response = await instance.put(`${END_POINT}/${credentials._id}`, credentials)
    return response.data
}

const remove = async (id) => {
    return await instance.delete(`${END_POINT}/${id}`)
}

const invoiceService = {
    findAll,
    findOneById,
    create,
    update,
    remove
}

export default invoiceService