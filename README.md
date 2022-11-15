<div align="center">
    <h1>网易云音乐</h1>
</div>

<p align="center">
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/v/NeteaseCloudMusicApi.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/npm/l/NeteaseCloudMusicApi.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/david/dev/binaryify/NeteaseCloudMusicApi.svg" alt="devDependencies" ></a>
<a href="https://www.npmjs.com/package/NeteaseCloudMusicApi"><img src="https://img.shields.io/david/binaryify/NeteaseCloudMusicApi.svg" alt="devDependencies" ></a>
<a href="https://codeclimate.com/github/Binaryify/NeteaseCloudMusicApi"><img src="https://codeclimate.com/github/Binaryify/NeteaseCloudMusicApi/badges/gpa.svg" /></a>
</p>

### 项目介绍
本项目采用**Vue**和**Node.js**等技术，构建了一个在线音乐播放平台，兼容PC端与移动端，实现登录、在线点播、MV等一百多个功能，后期会不断加入新功能。具体功能请看在线演示。

### 在线演示

[点我试试看](https://cloud-music-ten-black.vercel.app/#/)

或者

[点我](https://jerry-306.github.io/cloud-music/)

推荐使用PC端打开，效果更佳

### 项目截图

+ 登录
  ![登录](img-folder/login.png)
+ 个性推荐
  ![个性推荐](img-folder/personal-recommendation.png)
+ 歌单
  ![歌单](img-folder/song-list.png)
+ 筛选器
  ![筛选器](img-folder/filter.png)
+ 排行榜
  ![排行版](img-folder/leaderboard.png)
+ 歌手
  ![歌手](img-folder/singers.png)
+ 新歌速递
  ![新歌速递](img-folder/new-songs.png)
+ 新碟上架
  ![新碟上架](img-folder/new-discs.png)
+ 搜索联想
  ![搜索联想](img-folder/search-association.png)
+ 搜索结果
  ![搜搜结果](img-folder/search-details.png)
+ 音乐播放界面
  ![音乐播放界面](img-folder/music-player-interface.png)
+ 评论区
  ![评论区](img-folder/comment-area.png)
+ 视频播放界面
  ![视频播放界面](img-folder/video-player-interface.png)
+ 视频
  ![视频](img-folder/video-list.png)
+ MV
  ![MV](img-folder/mv-list.png)
+ 私人FM
  ![私人FM](img-folder/private-fm.png)
+ 歌单详情
  ![歌单详情](img-folder/playlist-details.png)
+ 歌单评论
  ![歌单评论](img-folder/comment.png)
+ 歌单收藏者
  ![歌单收藏者](img-folder/collector.png)
+ 作者信息
  ![作者信息](img-folder/author-details-page.png)
+ 每日推荐
  ![每日推荐](img-folder/daily-recommendation.png)
+ 当前播放
  ![当前播放](img-folder/currently-playing.png)
+ 我的创建
  ![我的创建](img-folder/my-creation.png)
+ 我的收藏
  ![我的收藏](img-folder/my-collection.png)
+ 最近播放
  ![最近播放](img-folder/recently-played.png)
+ 收藏歌单
  ![收藏歌单](img-folder/favorite-playlist.png)
+ 个人中心
  ![个人中心](img-folder/personal-center.png)

## 灵感来自

[Binaryify/NeteaseCloudMusicApi](https://github.com/Binaryify/NeteaseCloudMusicApi)

[darknessomi/musicbox](https://github.com/darknessomi/musicbox)

[sqaiyan/netmusic-node](https://github.com/sqaiyan/netmusic-node)

[greats3an/pyncm](https://github.com/greats3an/pyncm)

## 安装

```shell
$ git clone git@github.com:Jerry-306/cloudMusic.git

$ npm install
```

## 运行

```shell
$ npm run serve
```

## 使用文档

[文档地址](https://binaryify.github.io/NeteaseCloudMusicApi) 

## 功能特性

1. 登录
2. 刷新登录
3. 发送验证码
4. 校验验证码
5. 注册(修改密码)
6. 获取用户信息 , 歌单，收藏，mv, dj 数量
7. 获取用户歌单
8. 获取用户电台
9. 获取用户关注列表
10. 获取用户粉丝列表
11. 获取用户动态
12. 获取用户播放记录
13. 获取精品歌单
14. 获取歌单详情
15. 搜索
16. 搜索建议
17. 获取歌词
18. 歌曲评论
19. 收藏单曲到歌单
20. 专辑评论
21. 歌单评论
22. mv 评论
23. 获取歌曲详情
24. 获取专辑内容
25. 获取歌手单曲
26. 获取歌手 mv
27. 获取歌手专辑
28. 获取歌手描述
29. 获取相似歌手
30. 获取相似歌单
31. 相似 mv
32. 获取相似音乐
33. 获取每日推荐歌单
34. 获取每日推荐歌曲
35. 私人 FM
36. 喜欢音乐
37. 垃圾桶
38. 歌单 ( 网友精选碟 )
39. 新碟上架
40. 热门歌手
41. 最新 mv
42. 推荐 mv
43. 推荐歌单
44. 推荐新音乐
45. mv 排行
46. 获取 mv 数据
47. 播放 mv/视频
48. 排行榜
49. 歌手榜
50. 给评论点赞
51. 获取动态
52. 热搜列表(简略)
53. 新建歌单
54. 收藏/取消收藏歌单
55. 歌单分类
56. 收藏的歌手列表
57. 相关歌单推荐
58. 登录状态
59. 发送/删除评论
60. 热门评论
61. 视频评论
62. 退出登录
63. 所有榜单
64. 所有榜单内容摘要
65. 收藏视频
66. 收藏 MV
67. 视频详情
68. 相关视频
69. 关注用户
70. 新歌速递
71. 喜欢音乐列表(无序)
72. 收藏的 MV 列表
73. 获取最新专辑
74. 听歌打卡
75. 获取视频标签/分类下的视频
76. 已收藏专辑列表
77. 获取动态评论
78. 歌单收藏者列表
79. 获取视频标签列表
80. 全部mv
81. 网易出品mv
82. 收藏/取消收藏专辑
83. 专辑动态信息
84. 热搜列表(详细)
85. 更换绑定手机
86. 检测手机号码是否已注册
87. 初始化昵称
88. 更新歌单描述
89. 更新歌单名
90. 更新歌单标签
91. 默认搜索关键词
92. 删除歌单
93. 歌手热门50首歌曲
94. 获取 mv 点赞转发评论数数据
95. 获取视频点赞转发评论数数据
96. 获取推荐视频
97. 获取视频分类列表
98. 获取全部视频列表接口
99. 首页-发现
100. 数字专辑-全部新碟
101. 数字专辑-热门新碟
102. 数字专辑&数字单曲-榜单
103. 数字专辑-语种风格馆
104. 数字专辑详情
107. 更新头像
108. 歌单封面上传
109. 楼层评论
110. 歌手全部歌曲
111. 精品歌单标签列表
112. 用户等级信息
113. 用户绑定信息
114. 用户绑定手机
115. 账号信息
116. 收藏的专栏
117. 关注歌手新歌
118. 关注歌手新MV
119. 歌手详情
120. 二维码登录
121. 歌单详情动态
122. 歌手粉丝
123. 数字专辑详情
124. 数字专辑销量
125. 获取歌单所有歌曲
126. 最近播放-歌曲
127. 重复昵称检测
128. 歌手粉丝数量

## 后端项目贡献者

![](https://opencollective.com/NeteaseCloudMusicApi/contributors.svg?width=890)
