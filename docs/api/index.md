# API 开发文档

本文档为 XFLYSIM 平台后端接口说明，由后端接口文档整理而来。

## 基础信息

| 项目 | 说明 |
| --- | --- |
| 文档版本 | 1.0 |
| 正式环境 HOST | `https://api.xflysim.com/pilot` |

## 通用说明

- **统一响应结构**：所有接口均返回 `Result` 包装对象：

```json
{
  "code": 20000,
  "data": { },
  "message": ""
}
```

- `code` 为业务状态码，`20000` 表示成功；非 20000 时请以 `message` 中的说明为准。
- 分页接口返回 `IPage` 结构（`current` 当前页、`size` 每页条数、`total` 总数、`pages` 总页数、`records` 数据列表）。
- 公开接口按控制器分为以下分组。

## 接口分组

| 分组 | 控制器 | 接口数 | 文档 |
| --- | --- | --- | --- |
| 活动管理 | <kbd>activity-controller</kbd> | 3 | [/api/activity](/api/activity) |
| EFB 航行情报 | <kbd>efb-controller</kbd> | 19 | [/api/efb](/api/efb) |
| Infinite Flight | <kbd>infinite-flight-controller</kbd> | 6 | [/api/infinite-flight](/api/infinite-flight) |
| XVoice 语音 | <kbd>xvoice-controller</kbd> | 2 | [/api/xvoice](/api/xvoice) |

## 开发文档

- [FSD 通讯协议参考](/api/fsd-protocol)：Legacy FSD 文本行协议说明（登录会话、报文类型、位置上报、文本消息、飞行计划、错误码，及与本地客户端实现的对照）。

