import * as types from '../mutation-types'
import { resolve } from 'url';
import { reject } from 'q';
const state = {
    userdata:[
        
         {
            userimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            username:'邹小姐',
            subject:'小姐姐',
            userl:'6',
            is_tpye:1,
            userTime:'2019/ 08 / 09',
            userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            userliu:'1万次',
            userdz:'1万次',
            user:'2万次',
            is_flow: 1,

        },
        
        {
            userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            username:'邹小姐',
            subject:'小姐姐',
            userl:'6',
            is_tpye: 1,
            userTime:'2019/ 08 / 09',
            userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            userliu:'1万次',
            userdz:'1万次',
            user:'2万次',
            is_flow: 1
        },
        {
            userimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            username:'邹小姐',
            subject:'小姐姐',
            userl:'6',
            is_tpye: 1,
            userTime:'2019/ 08 / 09',
            userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter:'',
            userliu:'1万次',
            userdz:'1万次',
            user:'2万次',
            is_flow: 1
        },
        {
            userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            username:'邹小姐',
            subject:'小姐姐',
            userl:'6',
            is_tpye: 1,
            userTime:'2019/ 08 / 09',
            userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            userliu:'1万次',
            userdz:'1万次',
            user:'2万次',
            is_flow: 1
        },
        {
            userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            username:'邹小姐',
            subject:'小姐姐',
            userl:'6',
            is_tpye: 1,
            userTime:'2019/ 08 / 09',
            userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter:'',
            userliu:'1万次',
            userdz:'1万次',
            user:'2万次',
            is_flow: 1
        },
    ],
    askdata: [

        {
            userimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            username: '邹小姐',
            subject: '小姐姐',
            userl: '6',
            is_tpye: 2,
            userTime: '2019/ 08 / 09',
            userconter: '邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            userliu: '1万次',
            userdz: '1万次',
            user: '2万次',
            is_flow: 1,

        },

        {
            userimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            username: '邹小姐',
            subject: '小姐姐',
            userl: '6',
            is_tpye: 2,
            userTime: '2019/ 08 / 09',
            userconter: '邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            userliu: '1万次',
            userdz: '1万次',
            user: '2万次',
            is_flow: 1
        },
        {
            userimg: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            username: '邹小姐',
            subject: '小姐姐',
            userl: '6',
            is_tpye: 2,
            userTime: '2019/ 08 / 09',
            userconter: '邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter: '',
            userliu: '1万次',
            userdz: '1万次',
            user: '2万次',
            is_flow: 1
        },
        {
            userimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            username: '邹小姐',
            subject: '小姐姐',
            userl: '6',
            is_tpye: 2,
            userTime: '2019/ 08 / 09',
            userconter: '邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            userliu: '1万次',
            userdz: '1万次',
            user: '2万次',
            is_flow: 1
        },
        {
            userimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            username: '邹小姐',
            subject: '小姐姐',
            userl: '6',
            is_tpye: 2,
            userTime: '2019/ 08 / 09',
            userconter: '邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter: '',
            userliu: '1万次',
            userdz: '1万次',
            user: '2万次',
            is_flow: 1
        },
    ],
    followlist:[
        
        {
            userimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
           username:'邹小姐',
           subject:'小姐姐',
           userl:'6',
           type:1,
           userTime:'2019/ 08 / 09',
           userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
            userImgconter:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
           userliu:'1万次',
           userdz:'1万次',
           user:'2万次'
       },
       {
         type:2,
         userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
         username:'爱猫之人',
         sub_Namelist:'发布美女项目条的相关资源',
         userl:1,
         resou_Name:'猫猫不哭',
         resou_bit:'500M',
         add_tiem:'2019 / 09 / 19',
         userliu:'1万次',
         userdz:'1万次',
         user:'2万次',
         userconter:'',
         userImgconter:require('@/assets/images/zy.png'),

       },
       {
           userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
           username:'邹小姐',
           type:1,
           subject:'小姐姐',
           userl:'6',
           userTime:'2019/ 08 / 09',
           userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
           userImgconter:'',
           userliu:'1万次',
           userdz:'1万次',
           user:'2万次'
       },
       {
        type:3,
        userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
        username:'爱猫之人',
        sub_Namelist:'美女项目条',
        userl:1,
        add_tiem:'2019 / 09 / 19',
        userconter:'',
        userImgconter:'',

      },
       {
           userimg:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
           username:'邹小姐',
           subject:'小姐姐',
           type:1,
           userl:'6',
           userTime:'2019/ 08 / 09',
           userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
           userImgconter:'',
           userliu:'1万次',
           userdz:'1万次',
           user:'2万次'
       },
       {
        type:2,
        userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
        username:'爱猫之人',
        sub_Namelist:'发布美女项目条的相关资源',
        userl:1,
        resou_Name:'猫猫不哭',
        resou_bit:'500M',
        add_tiem:'2019 / 09 / 19',
        userliu:'1万次',
        userdz:'1万次',
        user:'2万次',
        userconter:'',
        userImgconter:require('@/assets/images/zy.png'),

      },
       {
           userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
           username:'邹小姐',
           subject:'小姐姐',
           userl:'6',
           type:1,
           userTime:'2019/ 08 / 09',
           userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
           userImgconter:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
           userliu:'1万次',
           userdz:'1万次',
           user:'2万次'
       },
       {
        type:3,
        userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
        username:'爱猫之人',
        sub_Namelist:'美女项目条',
        userl:1,
        add_tiem:'2019 / 07 / 19',
        userconter:'',
        userImgconter:'',

      },
       {
           userimg:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
           username:'邹小姐',
           subject:'小姐姐',
           userl:'6',
           type:1,
           userTime:'2019/ 08 / 09',
           userconter:'邹小姐是不是很漂亮，非常的漂亮。是不是啊。我觉得是非常的漂亮。嗯很漂亮',
           userImgconter:'',
           userliu:'1万次',
           userdz:'1万次',
           user:'2万次'
       },
   ],
    type:'1',
    carouselList:[
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            text:'1',
        },
        {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            text:'2',
        }, {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568628390333&di=000c59a99dff8dc428e7e60e07902673&imgtype=0&src=http%3A%2F%2Fwww.cnii.com.cn%2Finternetnews%2Fimg%2Fattachement%2Fjpg%2Fsite2%2F20130826%2F00016c58d8d513850ebe45.jpg',
            text:'3',
        },
    ],
    subjectlist:[
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'辣妹项目',
            id:1,
            type:1,
            is_f:1,
            subcont:[
                {
                    sub_img:'https://jingshui.bkyau4.top//api/order/images/2019-09-12/20190912113707-59284.jpg',
                    sub_name:'辣妹美容广州有限公司',
                    sub_msg:'辣妹项目',
                    sub_url:'www.lamei.com',
                    Nd:[
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    Jz:[
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    sub_conter:'辣妹公司自从在2019/9/25成立以来，一直尽心尽力打造全国最好的美容产品。欢迎加入我们。',
                    time:[
                        {
                         name:'开始',
                         tiem:'2019 / 07 / 06',
                         tiem_type:1   
                        },
                        {
                            name: '第一期',
                            tiem: '2019 / 10 / 06',
                            tiem_type: 1,
                            is_a:1
                        },
                        {
                            name: '第二期',
                            tiem: '2020 / 1 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第三期',
                            tiem: '2020 / 07 / 06',
                            tiem_type: 1
                        },
                    ]

                }
            ]

        },
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'靓妹项目',
            id:2,
            type:1,
            is_f: 1,
            subcont: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '辣妹美容广州有限公司',
                    sub_msg: '辣妹项目',
                    sub_url: 'www.lamei.com',
                    Nd: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        }, {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    Jz: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    sub_conter: '辣妹公司自从在2019/9/25成立以来，一直尽心尽力打造全国最好的美容产品。欢迎加入我们。',
                    time: [
                        {
                            name: '开始',
                            tiem: '2019 / 07 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第一期',
                            tiem: '2019 / 10 / 06',
                            tiem_type: 1,
                            is_a: 1
                        },
                        {
                            name: '第二期',
                            tiem: '2020 / 1 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第三期',
                            tiem: '2020 / 07 / 06',
                            tiem_type: 1
                        },
                    ]

                }
            ]
        },
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'美女项目',
            id:3,
            type:1,
            is_f: 1,
            subcont: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '美女项目广州有限公司',
                    sub_msg: '辣妹项目',
                    sub_url: 'www.lamei.com',
                    Nd: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    Jz: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    sub_conter: '美女项目/9/25成立以来，一直尽心尽力打造全国最好的美容产品。欢迎加入我们。',
                    time: [
                        {
                            name: '开始',
                            tiem: '2019 / 07 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第一期',
                            tiem: '2019 / 10 / 06',
                            tiem_type: 1,
                            is_a: 1
                        },
                        {
                            name: '第二期',
                            tiem: '2020 / 1 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第三期',
                            tiem: '2020 / 07 / 06',
                            tiem_type: 1
                        },
                    ]

                }
            ]
        },
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'靓妹项目靓妹项目靓妹项目',
            id:4,
            type:1,
            is_f: 1,
            subcont: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '辣妹美容广州有限公司',
                    sub_msg: '靓妹项目靓妹项目靓妹项目',
                    sub_url: 'www.lamei.com',
                    Nd: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        }, {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    Jz: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    sub_conter: '靓妹项目靓妹项目靓妹项目/9/25成立以来，一直尽心尽力打造全国最好的美容产品。欢迎加入我们。',
                    time: [
                        {
                            name: '开始',
                            tiem: '2019 / 07 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第一期',
                            tiem: '2019 / 10 / 06',
                            tiem_type: 1,
                            is_a: 1
                        },
                        {
                            name: '第二期',
                            tiem: '2020 / 1 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第三期',
                            tiem: '2020 / 07 / 06',
                            tiem_type: 1
                        },
                    ]

                }
            ]
        },
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'靓妹项目',
            id:5,
            type:1,
            is_f: 1,
            subcont: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '靓妹项目',
                    sub_msg: '靓妹项目',
                    sub_url: 'www.lamei.com',
                    Nd: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        }, {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    Jz: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    sub_conter: '靓妹项目/9/25成立以来，一直尽心尽力打造全国最好的美容产品。欢迎加入我们。',
                    time: [
                        {
                            name: '开始',
                            tiem: '2019 / 07 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第一期',
                            tiem: '2019 / 10 / 06',
                            tiem_type: 1,
                            is_a: 1
                        },
                        {
                            name: '第二期',
                            tiem: '2020 / 1 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第三期',
                            tiem: '2020 / 07 / 06',
                            tiem_type: 1
                        },
                    ]

                }
            ]
        },
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'我是一个小苹果',
            id:6,
            type:1,
            is_f: 1,
            subcont: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '我是一个小苹果',
                    sub_msg: '我是一个小苹果',
                    sub_url: 'www.lamei.com',
                    Nd: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        }, {
                            src: require('@/assets/images/subject_detail.png')
                        }, {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    Jz: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    sub_conter: '辣妹公司自从在2019/9/25成立以来，一直尽心尽力打造全国最好的美容产品。欢迎加入我们。',
                    time: [
                        {
                            name: '开始',
                            tiem: '2019 / 07 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第一期',
                            tiem: '2019 / 10 / 06',
                            tiem_type: 1,
                            is_a: 1
                        },
                        {
                            name: '第二期',
                            tiem: '2020 / 1 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第三期',
                            tiem: '2020 / 07 / 06',
                            tiem_type: 1
                        },
                    ]

                }
            ]
        },
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'爱爱i',
            id:7,
            type:1,
            is_f: 1,
            subcont: [
                {
                    sub_img: 'https://jingshui.bkyau4.top//api/order/images/2019-09-12/20190912113707-59284.jpg',
                    sub_name: '爱爱i',
                    sub_msg: '爱爱i',
                    sub_url: 'www.lamei.com',
                    Nd: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    Jz: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        }, {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    sub_conter: '爱爱i/9/25成立以来，一直尽心尽力打造全国最好的美容产品。欢迎加入我们。',
                    time: [
                        {
                            name: '开始',
                            tiem: '2019 / 07 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第一期',
                            tiem: '2019 / 10 / 06',
                            tiem_type: 1,
                            is_a: 1
                        },
                        {
                            name: '第二期',
                            tiem: '2020 / 1 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第三期',
                            tiem: '2020 / 07 / 06',
                            tiem_type: 1
                        },
                    ]

                }
            ]
        },
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'宠物',
            id:8,
            type:1,
            is_f: 1,
            subcont: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '宠物',
                    sub_msg: '宠物',
                    sub_url: 'www.lamei.com',
                    Nd: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    Jz: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    sub_conter: '宠物/9/25成立以来，一直尽心尽力打造全国最好的美容产品。欢迎加入我们。',
                    time: [
                        {
                            name: '开始',
                            tiem: '2019 / 07 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第一期',
                            tiem: '2019 / 10 / 06',
                            tiem_type: 1,
                            is_a: 1
                        },
                        {
                            name: '第二期',
                            tiem: '2020 / 1 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第三期',
                            tiem: '2020 / 07 / 06',
                            tiem_type: 1
                        },
                    ]

                }
            ]
        },
        {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            sub_name:'大猫',
            id:9,
            type:1,
            is_f: 1,
            subcont: [
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '大猫美容广州有限公司',
                    sub_msg: '大猫',
                    sub_url: 'www.lamei.com',
                    Nd: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    Jz: [
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                        {
                            src: require('@/assets/images/subject_detail.png')
                        },
                    ],
                    sub_conter: '大猫公司自从在2019/9/25成立以来，一直尽心尽力打造全国最好的美容产品。欢迎加入我们。',
                    time: [
                        {
                            name: '开始',
                            tiem: '2019 / 07 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第一期',
                            tiem: '2019 / 10 / 06',
                            tiem_type: 1,
                            is_a: 1
                        },
                        {
                            name: '第二期',
                            tiem: '2020 / 1 / 06',
                            tiem_type: 1
                        },
                        {
                            name: '第三期',
                            tiem: '2020 / 07 / 06',
                            tiem_type: 1
                        },
                    ]

                }
            ]
        },
    ], //项目条
    // 为你推荐
    Popular:[
        {
            src:'https://jingshui.bkyau4.top//api/order/images/2019-09-12/20190912113707-59284.jpg',
            sub_name:'美女',
            id:8,
            type:2
        },
        {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
            sub_name:'宠物',
            id:9,
            type:2
        },
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'动漫',
            id:4,
            type:2
        },
        {
            src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            sub_name:'考研',
            id:5,
            type:2
        },
        {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568628301203&di=37582ebf48debce80b6a9b3b01f0c74e&imgtype=0&src=http%3A%2F%2Fimg5.duitang.com%2Fuploads%2Fitem%2F201505%2F25%2F20150525003104_kwtTU.jpeg',
            sub_name:'摄影',
            id:10,
            type:2
        },
        {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568628390333&di=000c59a99dff8dc428e7e60e07902673&imgtype=0&src=http%3A%2F%2Fwww.cnii.com.cn%2Finternetnews%2Fimg%2Fattachement%2Fjpg%2Fsite2%2F20130826%2F00016c58d8d513850ebe45.jpg',
            sub_name:'二次元',
            id:11,
            type:2
        },
        {
            src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568628485351&di=0e5b19a8de846594a3af6415daa7ea7b&imgtype=0&src=http%3A%2F%2Fwww.juimg.com%2Ftuku%2Fyulantu%2F140410%2F330423-14041013000872.jpg',
            sub_name:'新片推荐',
            id:5,
            type:2
        },
        
        
    ],
    tablist:[
        {
            name:'动态',
            Isactive:true,
        },
        {
            name:'资讯',
            Isactive:false,
        },
        {
            name:'提问',
            Isactive:false,
        },
        {
            name:'经验',
            Isactive:false,
        },
        {
            name:'资源',
            Isactive:false,
        },
        {
            name:'更多',
            Isactive:false,
        },

    ], //tab
    resource:[
        {
            res_name:'老人与海',
            bit:'100M',
            add_tiem:'2019 / 09 / 19',
            userliu:'1万次',
            userdz:'1万次',
            user:'2万次',
        },
        {
            res_name:'葫芦娃',
            bit:'120M',
            add_tiem:'2019 / 09 / 19',
            userliu:'1万次',
            userdz:'1万次',
            user:'2万次',
        },
        {
            res_name:'大鱼海棠',
            bit:'300M',
            add_tiem:'2019 / 09 / 19',
            userliu:'1万次',
            userdz:'1万次',
            user:'2万次',
        },
    ],  //资源
    grouplist:[

        {
            group_name:'漫画',
            group_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568628390333&di=000c59a99dff8dc428e7e60e07902673&imgtype=0&src=http%3A%2F%2Fwww.cnii.com.cn%2Finternetnews%2Fimg%2Fattachement%2Fjpg%2Fsite2%2F20130826%2F00016c58d8d513850ebe45.jpg',
            group_suggest:'动画更新，二次元漫画，追剧。讨论',
            group_order:20,
            group_num:60,
            group_id:1,
            new_type:1,
            is_flow:1
        },
        {
            group_name:'萌宠',
            group_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971356818&di=8b8f21123d07e2dcd6c26243447f16f6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201311%2F24%2F20131124132908_tGFjm.thumb.700_0.jpeg',
            group_suggest:'萌宠出售，萌宠讨论。交流',
            group_order:20,
            group_num:60,
            group_id:2,
            is_flow:1,
            new_type:1,
        },
        {
            group_name:'美女模特',
            group_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971441222&di=97581c1b9b710da463eb7a173bee68bb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201310%2F27%2F20131027115300_dtdB4.jpeg',
            group_suggest:'模特的讨论，模特的照片',
            group_order:20,
            group_num:60,
            group_id:3,
            new_type:1,
            is_flow:1
        },
        {
            group_name:'学习交流',
            group_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971505449&di=a0eaf96d6b670d590f6194ec48b0b4ab&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181014%2F6a9468fb93f542a887450de5d156efd1.jpeg',
            group_suggest:'暑期作业,寒假作业代写。研究考研',
            group_order:20,
            group_num:60,
            group_id:4,
            new_type:1,
            is_flow:1
        },


    ], //新组
    grouphot:[

        {
            group_name:'漫画',
            group_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568628390333&di=000c59a99dff8dc428e7e60e07902673&imgtype=0&src=http%3A%2F%2Fwww.cnii.com.cn%2Finternetnews%2Fimg%2Fattachement%2Fjpg%2Fsite2%2F20130826%2F00016c58d8d513850ebe45.jpg',
            group_suggest:'动画更新，二次元漫画，追剧。讨论',
            group_order:20,
            group_num:60,
            group_id:1,
            new_type:2,
            is_flow:1
        },
        {
            group_name:'萌宠',
            group_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971356818&di=8b8f21123d07e2dcd6c26243447f16f6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201311%2F24%2F20131124132908_tGFjm.thumb.700_0.jpeg',
            group_suggest:'萌宠出售，萌宠讨论。交流',
            group_order:20,
            group_num:60,
            group_id:2,
            new_type:2,
            is_flow:1
        },
        {
            group_name:'美女模特',
            group_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971441222&di=97581c1b9b710da463eb7a173bee68bb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201310%2F27%2F20131027115300_dtdB4.jpeg',
            group_suggest:'模特的讨论，模特的照片',
            group_order:20,
            group_num:60,
            group_id:3,
            new_type:2,
            is_flow:1
        },
        {
            group_name:'学习交流',
            group_img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971505449&di=a0eaf96d6b670d590f6194ec48b0b4ab&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181014%2F6a9468fb93f542a887450de5d156efd1.jpeg',
            group_suggest:'暑期作业,寒假作业代写。研究考研',
            group_order:20,
            group_num:60,
            group_id:4,
            new_type:2,
            is_flow:1
        },


    ], //热门小组
    groupcont:[
        {
            group_img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            group_name:'动漫',
            gr_type:'未完成',
            user_name:'违建',
            user_l:6,
            add_time:'2019 / 9 / 10',
            group_conter:'我不想上班啊，不想上班啊，不想上班啊',
            imglist:[
                {
                    src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                },
                 {
                    src:'https://jingshui.bkyau4.top//api/order/images/2019-09-12/20190912113707-59284.jpg',
                 },
                 {
                    src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971356818&di=8b8f21123d07e2dcd6c26243447f16f6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201311%2F24%2F20131124132908_tGFjm.thumb.700_0.jpeg',
                }
            ],
            user_lu:'11万次',
            user_d:'12万次',
            user_p:'13万次',
            group_dz:[
                {
                    name:'违建',
                },
                {
                    name:'华姐',
                },
                {
                    name:'鹏姐',
                },
            ],
            group_pl:[
                {
                    name:'华姐',
                    conter:'这个不错'
                },
                {
                    name:'违建',
                    conter:'这个什么'
                },
                {
                    name:'鹏姐',
                    conter:'这是什么鬼'
                },
            ]
        },
        {
            group_img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            group_name:'动漫',
            gr_type:'未完成',
            user_name:'违建',
            user_l:6,
            add_time:'2019 / 9 / 10',
            group_conter:'我不想上班啊，不想上班啊，不想上班啊',
            imglist:[
                {
                    src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                },
                 {
                    src:'https://jingshui.bkyau4.top//api/order/images/2019-09-12/20190912113707-59284.jpg',
                 },
                 {
                    src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971356818&di=8b8f21123d07e2dcd6c26243447f16f6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201311%2F24%2F20131124132908_tGFjm.thumb.700_0.jpeg',
                }
            ],
            user_lu:'11万次',
            user_d:'12万次',
            user_p:'13万次',
            group_dz:[
                {
                    name:'违建',
                },
                {
                    name:'华姐',
                },
                {
                    name:'鹏姐',
                },
            ],
            group_pl:[
                {
                    name:'华姐',
                    conter:'这个不错'
                },
                {
                    name:'违建',
                    conter:'这个什么'
                },
                {
                    name:'鹏姐',
                    conter:'这是什么鬼'
                },
            ]
        },
        {
            group_img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
            group_name:'动漫',
            gr_type:'未完成',
            user_name:'违建',
            user_l:6,
            add_time:'2019 / 9 / 10',
            group_conter:'我不想上班啊，不想上班啊，不想上班啊',
            imglist:[
                {
                    src:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                },
                 {
                    src:'https://jingshui.bkyau4.top//api/order/images/2019-09-12/20190912113707-59284.jpg',
                 },
                 {
                    src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971356818&di=8b8f21123d07e2dcd6c26243447f16f6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201311%2F24%2F20131124132908_tGFjm.thumb.700_0.jpeg',
                }
            ],
            user_lu:'11万次',
            user_d:'12万次',
            user_p:'13万次',
            group_dz:[
                {
                    name:'违建',
                },
                {
                    name:'华姐',
                },
                {
                    name:'鹏姐',
                },
            ],
            group_pl:[
                {
                    name:'华姐',
                    conter:'这个不错'
                },
                {
                    name:'违建',
                    conter:'这个什么'
                },
                {
                    name:'鹏姐',
                    conter:'这是什么鬼'
                },
            ]
        }
    ],    //小组评论的内容
    sublist: [
        {
            name: '资讯',
            Isactive: true,
        },
        {
            name: '提问',
            Isactive: false,
        },
        {
            name: '经验',
            Isactive: false,
        },
        {
            name: '资源',
            Isactive: false,
        },
        {
            name: '评论',
            Isactive: false,
        },

    ], //tab
    // 选择小组
    groupselect:[
        {
            group_name: '漫画',
            group_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568628390333&di=000c59a99dff8dc428e7e60e07902673&imgtype=0&src=http%3A%2F%2Fwww.cnii.com.cn%2Finternetnews%2Fimg%2Fattachement%2Fjpg%2Fsite2%2F20130826%2F00016c58d8d513850ebe45.jpg',
            group_suggest: '动画更新，二次元漫画，追剧。讨论',
            group_order: 20,
            group_num: 60,
            group_id: 1,
            new_type: 3,
            is_flow: 1
        },
        {
            group_name: '萌宠',
            group_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971356818&di=8b8f21123d07e2dcd6c26243447f16f6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201311%2F24%2F20131124132908_tGFjm.thumb.700_0.jpeg',
            group_suggest: '萌宠出售，萌宠讨论。交流',
            group_order: 20,
            group_num: 60,
            group_id: 2,
            new_type: 3,
            is_flow: 1
        },
        {
            group_name: '美女模特',
            group_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971441222&di=97581c1b9b710da463eb7a173bee68bb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201310%2F27%2F20131027115300_dtdB4.jpeg',
            group_suggest: '模特的讨论，模特的照片',
            group_order: 20,
            group_num: 60,
            group_id: 3,
            new_type: 3,
            is_flow: 1
        },
        {
            group_name: '学习交流',
            group_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971505449&di=a0eaf96d6b670d590f6194ec48b0b4ab&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181014%2F6a9468fb93f542a887450de5d156efd1.jpeg',
            group_suggest: '暑期作业,寒假作业代写。研究考研',
            group_order: 20,
            group_num: 60,
            group_id: 4,
            new_type: 3,
            is_flow: 1
        },
        {
            group_name: '鬼畜',
            group_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568628390333&di=000c59a99dff8dc428e7e60e07902673&imgtype=0&src=http%3A%2F%2Fwww.cnii.com.cn%2Finternetnews%2Fimg%2Fattachement%2Fjpg%2Fsite2%2F20130826%2F00016c58d8d513850ebe45.jpg',
            group_suggest: '动画更新，二次元漫画，追剧。讨论',
            group_order: 20,
            group_num: 60,
            group_id: 5,
            new_type: 3,
            is_flow: 1
        },
        {
            group_name: 'NBA',
            group_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971356818&di=8b8f21123d07e2dcd6c26243447f16f6&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fblog%2F201311%2F24%2F20131124132908_tGFjm.thumb.700_0.jpeg',
            group_suggest: 'NBA讨论',
            group_order: 20,
            group_num: 60,
            group_id: 6,
            new_type: 3,
            is_flow: 1
        },
        {
            group_name: '旅游',
            group_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971441222&di=97581c1b9b710da463eb7a173bee68bb&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201310%2F27%2F20131027115300_dtdB4.jpeg',
            group_suggest: '各界的各国的风景',
            group_order: 20,
            group_num: 60,
            group_id: 7,
            new_type: 3,
            is_flow: 1
        },
        {
            group_name: '一二三',
            group_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568971505449&di=a0eaf96d6b670d590f6194ec48b0b4ab&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181014%2F6a9468fb93f542a887450de5d156efd1.jpeg',
            group_suggest: '游戏',
            group_order: 20,
            group_num: 60,
            group_id: 4,
            new_type: 3,
            is_flow: 1
        },
    ],
    // 选择关注的小组
    followground:[],
    // 选择关注的项目条
    onloadsubject:[
        {
            sub_name:'动漫',
            id:'1',
            on_active:1,
            sub_conince:[
                {
                    sub_img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name:'二次元',
                    order_num:5,
                    follow_num:10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                }
            ]
        },
        {
            sub_name: '美女',
            id: '2',
            on_active: 1,
            sub_conince: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '二次元',
                    order_num: 5,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                }
            ]
        },
        {
            sub_name: '动物',
            id: '3',
            on_active: 1,
            sub_conince: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '二次元',
                    order_num: 5,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                }
            ]
        },
        {
            sub_name: '萌新',
            id: '4',
            on_active: 1,
            sub_conince: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '二次元',
                    order_num: 5,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                }
            ]
        },
        {
            sub_name: '学习',
            id: '2',
            on_active: 1,
            sub_conince: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '二次元',
                    order_num: 5,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                }
            ]
        },
    ],
    sub_conince:[
        {
            id:'1',
            sub_conince: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '二次元',
                    order_num: 5,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                }
            ]
        },
        {
            id:'2',
            sub_conince: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '二次元',
                    order_num: 5,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                }
            ]
        },
        {
            id: '3',
            sub_conince: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '二次元',
                    order_num: 5,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                }
            ]
        },
        {
            id: '4',
            sub_conince: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '二次元',
                    order_num: 5,
                    follow_num: 10,
                },
               
            ]
        },
        {
            id: '5',
            sub_conince: [
                {
                    sub_img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2385002424,2773893641&fm=26&gp=0.jpg',
                    sub_name: '二次元',
                    order_num: 5,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                },
                {
                    sub_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1568627751783&di=4b7b5453bcc42a79b4c3134a649225e6&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3145340897%2C1327228973%26fm%3D214%26gp%3D0.jpg',
                    sub_name: '美女',
                    order_num: 55,
                    follow_num: 10,
                }
            ]
        },

    ],
    // 选择的项目条
    selectsub:[],
    experconter:[
        
    ]

}
const mutations = {
    // 启动页选择项目条
    [types.SELECTSUB]( state , data  ){
        var that = this;
        let sele = state.selectsub;
        if ( sele.length <= 5 ){
            if (sele.includes(data.i) == true){
                return;
            }else{
                sele.push(data.i);
            }

        } 
        state.selectsub = sele;
    },
    // tab的切换
    [types.INDEXNAV]( state ,data ){
        var tablist =   state.tablist;
        for( var i = 0; i < data.tablen; i++ ){
            data.tabarr[i].style.display = 'none';
            tablist[i].Isactive = false;
        } 
        data.tabarr[data.b].style.display = 'block';
        tablist[data.b].Isactive = true;
        state.tablist = tablist;
    },
    [types.SUBTAB]( state ,data ){
        var tablist = state.sublist;
        for (var i = 0; i < data.tablen; i++) {
            data.tabarr[i].style.display = 'none';
            tablist[i].Isactive = false;
        }
        data.tabarr[data.b].style.display = 'block';
        tablist[data.b].Isactive = true;
        state.sublist = tablist;
    },
    // 小组的关注
    [types.FOLLOWSUB]( state , data ){
        switch(data.type){
            case 1:
                let grouplist = state.grouplist;
                grouplist[data.index].is_flow != data.c;

                grouplist[data.index].is_flow = !data.c;
                state.grouplist = grouplist;
                break;
            case 2:
                let grouphot = state.grouphot;
                grouphot[data.index].is_flow != data.c;
                grouphot[data.index].is_flow = !data.c;
                state.grouphot = grouphot;
                break;
            case 3:
                let groupselect = state.groupselect;
                let followlist = state.followground;
                   
                switch (groupselect[data.index].is_flow){
                    case 1:
                        followlist.push(groupselect[data.index]);
                        break;
                    case !1:
                        followlist.splice(followlist.indexOf(groupselect[data.index]),1);
                        break;
                }
                groupselect[data.index].is_flow != data.c;
                groupselect[data.index].is_flow = !data.c;
                state.groupselect = groupselect;
                state.followground = followlist;
                break;
        }
    },
    // /项目条的关注
    [types.ISFOLLOW]( state , data){
        let subjectlist = state.subjectlist;
        subjectlist.map((item)=>{
            if (item.id == data.id) item.is_f != data.f;
            if (item.id == data.id) item.is_f = !data.f;
        })
        state.subjectlist = subjectlist;    
    }
}
const actions = {
    Selectsub({ commit, state }, data) {   //foolo
        return new Promise((resolve, reject) => {
            commit('SelectSub', data)
            resolve(data)
        })
    },
    Remove({ commit,state },data ){   //foolo
        return new Promise((resolve,reject)=>{
            commit('IndexNav',data)
            resolve(data)
        })
    },
    Restab({ commit, state }, data) {   //foolo
        return new Promise((resolve, reject) => {
            commit('SubTab', data)
            resolve(data)
        })
    },
    // 关注
    Followsub({ commit,state }, data ){
        return new Promise(( resolve , reject ) =>{
            resolve(data)
            commit('FollowSub',data)
        })
    },
    // 关注
    Followsubdetal({ commit, state }, data) {
        // console.log(data)
        return new Promise((resolve, reject) => {
            resolve(data)
            // console.log(data)
            commit('Isfollow', data)
        })
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}