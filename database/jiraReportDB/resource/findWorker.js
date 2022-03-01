db.users.find({
    // 부서로 사원 찾기
    // team_name: {$nin: []}
    team_name: { $in: ['ERP개발1Cell', 'ERP개발2Cell'] }

    // 아이디로 사원 찾기
    // id: {$nin: []}
    // id: {$in: ['yswgood0329', 'ywpark']}
}, {
    _id: false,
    id: true
})