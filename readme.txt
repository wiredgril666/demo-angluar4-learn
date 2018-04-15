踩坑修炼中：
      用cnpm 淘宝镜像当文件，node_modules文件很多文件夹是快捷方式，
      在angular-cli文件中，scripts配置，需要引入jQuery和bootstrap的具体文件路径，而不是快捷方式
      
      配置服务器代理转发的时候，需要在proxy.conf.json中配上
	{ "/v2":{
        "target":"https://api.douban.com",
        "secure": false,
        "changeOrigin":true//记得配changeOrigin，不然会转发失败....额...找了有点久....
    		}
	}

