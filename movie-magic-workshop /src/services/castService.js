import Cast from '../models/Cast.js'


const create = (cast) => Cast.create(cast);

const getAll = () => Cast.find();


const getAllExcept = (casts) => {
    const castId = casts.map(c => c._id);
    return Cast.find().nin('_id', castId);
}


export default {
    create,
    getAll,
    getAllExcept
}