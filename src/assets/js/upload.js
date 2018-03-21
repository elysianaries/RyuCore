picPostParams() {
    this.pic_post_params.id = 'myUpload-input'
    this.pic_post_params.uploadUrl = 'http://image.sfdai.com/api/image'
    this.pic_post_params.beforeSend = (file) => {
        // this.post_success = 1
    }
    this.pic_post_params.callback = (res, pic_name) => {

    }
    this.pic_post_params.uploading = (res) => {

    }
}, // 整合 一个上传的参数对象
clickUp(pic_name) {
    this.picPostParams() // 上传方法之前，先把对象整合一下
    this.sfdaiUpload(this.pic_post_params, pic_name)
}, // 点击触发下面的上传方法，参数为上面封装的对象
sfdaiUpload(option, pic_name) {
    this.uploadUrl = option.uploadUrl
    this.callback = option.callback
    this.uploading = option.uploading
    this.beforeSend = option.beforeSend
    // 可以改写
    this.uploadPic(pic_name)
},
removeImage() {
    this.image = []
    document.getElementById('myUpload-input').value = null
    // 移除input file选中的文件，其值为value
},
// createTest(name) {
//     this.image[name] = []
// },
inputChange(e, the_image) {
    this.pic_upload_sure_index[the_image] = 1
    this.image[the_image] = [0]
    this.image[the_image].$set(0, 0)
    let files = e.target.files || e.dataTransfer.files
    // 获取图片，拖曳也可以
    this.files_list[the_image] = files
    if (!this.files_list.length) {
        this.image[the_image] = [0]
    }
    for (let x = 0; x < this.files_list[the_image].length; x++) {
        this.createImage(this.files_list[the_image][x], the_image)
    }
    this.file[the_image] = this.files_list[the_image]
    this.clickUp(the_image)
},
createImage(file, the_image) {
    const image = new Image()
    const reader = new FileReader()
    reader.onload = (e) => {
        this.image[the_image].push(e.target.result)
        console.log(this.image[the_image])
    }
    console.log(file)
    // reader.readAsDataURL(file)
    // base64
    reader.readAsBinaryString(file)
    // 二进制
    console.log(this.image[the_image])
},
uploadPic(pic_name) {
    for (let x = 0; x < this.file[pic_name].length; x++) {
        const file = this.file[pic_name][x]
        console.log('开始上传：' + file.name)
        const xhr = new XMLHttpRequest()
        const fd = new FormData()
        if (this.beforeSend instanceof Function) {
            if (this.beforeSend(file) === false) {
                return false
            }
        }
        const up_time = new Date()
        const up_time_date = up_time.toLocaleDateString()
        const source_params = {
            method: 'upload',
            custom_url: 'https://beejc.com/imgs',
            path: '/goods/' + up_time_date
        }
        const params = this.buildup_arguments(source_params)
        fd.append('file', file)
        fd.append('params', params.params)
        fd.append('sign', params.sign)
        fd.append('time', params.time)
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (this.callback instanceof Function) {
                    this.callback(xhr.responseText, pic_name)
                }
            }
        }
        xhr.upload.onprogress = (evt) => {
            const loaded = evt.loaded
            const tot = evt.total
            this.upload_percent = Math.floor(100 * loaded / tot)
           // 已经上传的百分比
            if (this.uploading instanceof Function) {
                this.uploading(this.upload_percent)
            }
        }
        xhr.open('post', this.uploadUrl)
        xhr.send(fd)
        this.pic_upload_sure_index[pic_name] = 0
        console.log('上传完毕：' + file.name)
    }
    return true
},
testqqq() {
    // this.image.id_card_behind[0] = !this.image.id_card_behind[0]
    this.image.id_card_behind.$set(0, 1)
}
