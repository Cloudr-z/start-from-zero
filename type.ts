//数据类型

//功能-数据类型的排列组合

export type Id  = {
    _id: number, //序号 1,2,3,4...
    utc: number, //utc - universal time convention -> 日期时间格式 "2023-11-25"
    name: string, // name 名称 命名 != id 不适合计算-> 用于用户需要
    adm1: string, //地区 - adminstration region 一级行政区 - 省级行政区
    adm2: string, // 市级行政区
    msg: string, // message 消息 【内容】 
}

//用户 id 和 操作接入方式
//让用户来控制id符号

export type Usr = Id & {
    nbr?: string, //手机号 number
    sms?: {code: number, utc: number},
    jwt?: string, //票据 Token - JSON

}

//俱乐部 soc - social - society
export type Soc = Id & {
    sec: Usr["_id"][], //联络员id 复数
    agr: {msg: string, utc: number}, //agreement 用户协议
}

//活动 - 俱乐部的活动 agd - agenda 日程/章程/活动
export type Agd = Id & {
    soc: Soc["_id"], //活动所属的 俱乐部
}

//实体的操作、过程、记录、历史

//记录
export type Rec = {
	_id: { usr: Usr["_id"], soc: Soc["_id"], utc: number },
	msg: string,
	amt: number, // amount 量
	sec?: Usr["_id"], // 作记录的联络员，谁负责 
}

//credit 积分
export type Cdt = Rec & {
	utc: { eft: number, exp: number, agr: number }, // effective-utc 生效时间，expire-utc 失效时间，用户同意协议的时间 agreement-utc
	aug?: { msg: string, amt: number, utc: number, sec: Usr["_id"] }[], //augmentation 追加积分，谁追加
}

//debit 积分使用 记录 credit-debit accounting
export type Dbt = Rec & {
	rev?: { msg: string, rev: 1 | 2 | 3 | 4 | 5, utc: number }, //review 评分
}

// earing earned contribute 贡献
export type Ern = Rec

//文章/博客 Message
export type Msg = {
	_id: number,
	nam: string,
	utc: { pre: number, put: number },
	usr: Usr["_id"],
	msg: string,
	pin?: true, //置顶
}

export type Wsl = Msg //五四
export type Lit = Msg //理论学习 

//网站权限
export type Aut = {
	_id: 1,
	sup: Usr["_id"][], // super supreme 超级用户
	aut: Usr["_id"][], // author 管理员
	wsl: Usr["_id"][], // 编辑
	lit: Usr["_id"][], // 编辑
}
