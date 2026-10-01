# Infinite Flight

> 接口分组：`infinite-flight-controller`

## 接口列表

- **无限试飞机型获取**：`GET` `/api/infinite-flight/aircraft`
- **无限试飞ATC获取**：`POST` `/api/infinite-flight/atc`
- **无限试飞机组飞行计划获取**：`POST` `/api/infinite-flight/flightPlan`
- **无限试飞机组飞行轨迹获取**：`POST` `/api/infinite-flight/flightRoute`
- **无限试飞服务器用户获取**：`GET` `/api/infinite-flight/flights`
- **无限试飞服务器获取**：`GET` `/api/infinite-flight/sessions`

## 无限试飞机型获取

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/infinite-flight/aircraft` |

**请求参数**：暂无

## 无限试飞ATC获取

| 请求方式 | 接口地址 |
| --- | --- |
| POST | `/api/infinite-flight/atc` |

**请求参数**：暂无

## 无限试飞机组飞行计划获取

| 请求方式 | 接口地址 |
| --- | --- |
| POST | `/api/infinite-flight/flightPlan` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| flightId | flightId | query | false | string |  |
| sessionId | sessionId | query | false | string |  |

## 无限试飞机组飞行轨迹获取

| 请求方式 | 接口地址 |
| --- | --- |
| POST | `/api/infinite-flight/flightRoute` |

**请求参数**

| 参数名称 | 参数说明 | 请求类型 | 是否必须 | 数据类型 | schema |
| --- | --- | --- | --- | --- | --- |
| flightId | flightId | query | false | string |  |
| sessionId | sessionId | query | false | string |  |

## 无限试飞服务器用户获取

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/infinite-flight/flights` |

**请求参数**：暂无

## 无限试飞服务器获取

| 请求方式 | 接口地址 |
| --- | --- |
| GET | `/api/infinite-flight/sessions` |

**请求参数**：暂无

