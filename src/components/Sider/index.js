import React from "react"
import { Layout, Icon, Tag, Divider } from 'antd'
import { Link } from "gatsby"
import "./index.scss"

function random(colorList) {
  const len = colorList.length
  return Math.floor(Math.random() * len)
}

const { Sider } = Layout

const colorList = ['magenta', 'blue', 'red', 'volcano', 'orange', 'gold', 'lime', 'green', 'cyan', 'geekblue', 'purple'] // 标签颜色

const tagList = [
  {
    name:"js",
    count:4
  },
  {
    name:"react",
    count:4
  },
  {
    name:"react-native",
    count:4
  },
  {
    name:"篮球",
    count:4
  },
  {
    name:"电影",
    count:4
  },
]

const SiderFrame = () => (
  <div className="sider-wrapper">
    <img src={require('../../images/avatar.png')} className="sider-avatar" alt="" />
    <h2 className="name">小明</h2>
    <div className="title">一个追求一统江山的前端</div>
    <ul className="link-list">
      <li>
        <Icon type="github" />
        <a target="_blank" rel="noreferrer noopener" href="https://github.com/pxiaoming">
          github
        </a>
      </li>
      <li>
        <i className="iconfont icon-juejin" />
        <a target="_blank" rel="noreferrer noopener" href="https://juejin.im/user/57e9bd91816dfa005ef8788b">
          juejin
        </a>
      </li>
    </ul>

    {/* <Divider orientation="left">最近文章</Divider>
    <ul className="recent-list">
      {recentList.map(d => (
        <li key={d.id}>
          <Link to={`/article/${d.id}`}>{d.title}</Link>
        </li>
      ))}
    </ul> */}
    <Divider orientation="left">标签</Divider>
    <div className="tags-content">
      {tagList.map((tag, i) => (
        <Tag className="tag-item" key={i} color={colorList[i] ? colorList[i] : colorList[random(colorList)]}>
          <Link to={`/tags/${tag.name}`}>{tag.name}</Link>
        </Tag>
      ))}
    </div>
  </div>
)

export default SiderFrame
