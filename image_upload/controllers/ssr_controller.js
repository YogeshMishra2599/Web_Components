const renderUploadImageForm = async (req, res) => {
    try {
        return res.status(200).render('uploadImg', { title: 'upload img' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, details: err })
    }   
}

const getImg = async (req, res) => {
    try {
        return res.status(200).render('getImg', { title: 'get img' });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, details: err })
    }       
}

module.exports = {
    renderUploadImageForm,
    getImg,
}