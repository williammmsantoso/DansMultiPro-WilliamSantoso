import axios from "axios";

export const getJobList = async (params: any) => {
    try {
        const { description, location, full_time, page } = params;

        const paramsSend = description || location || full_time ? `${description && `description=${description}`}&${location && `location=${location}`}&${full_time &&`full_time=${full_time}`}` : '';
        const pagination = page ? `&page=${page}` : ''

        const res = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json?${paramsSend}${pagination}`);

        return res;
    } catch(error) {
        return error
    }
}

export const getJobDetail = async (id: any) => {
    try {
        if (id) {
            const res = await axios.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`);

            return res;
        } else {
            throw('error id is empty');
        }

    } catch (error) {
        return error
    }
}