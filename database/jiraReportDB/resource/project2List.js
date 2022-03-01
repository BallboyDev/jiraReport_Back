db.issues.aggregate([{
    $match: {
        type: { $nin: ['', null] },
        'date.dt_start': { $nin: ['', null] },
        'id.id_assign': { $in: ['920604abc', 'asdlkjsb', 'baram22', 'cabred', 'dksalstj123', 'dksrhkd123', 'dmdm27', 'dojunman', 'dufgufroal', 'ella', 'etakhee', 'granun729', 'ipark22', 'jeongran78', 'jiyushin', 'joungbin12', 'kjyoung4102', 'kyuhyun92', 'her2814', 'jaemoonzzang', 'leehj', 'lovewar2', 'jeonyj', 'myfriend1001', 'kangbonii', 'rileybell', 'kyusun825', 'sdlee', 'luna_lay', 'solsol', 'tskim', 'netfuny', 'yonsi112', 'rlathgus228', 'ywpark', 'sejk', 'south07', 'wonrince', 'youngchanham', 'zzonghyun', 'mskook', 'pjy1551', 'salangman', 'sjs2888', 'taehun21c', 'yain3126', 'ysh0426', 'jjs1545', 'kkd0521', 'linking204', 'mydevilsh', 'psm90', 'sb100', 'skennel', 'toyworld814', 'yangjh99', 'yswgood0329', 'hsjung7', 'jijung', 'kindlech', 'lee0506kr', 'modori', 'niceguykws', 'ryubalance126', 'sjd6222', 'sssshhheepo', 'y8055', 'youngmin7493'] },
        status: { $in: ['견적요청(PIMS)', '할일', '확인예정(PIMS)'] },
        group: '단위업무',
        $or: [
            {
                $and: [
                    { 'date.dt_end': { $gte: '20210101' } },
                    { 'date.dt_end': { $lte: '20211231' } }
                ]
            }, {
                $and: [
                    { 'date.dt_start': { $gte: '20210101' } },
                    { 'date.dt_start': { $lte: '20211231' } }
                ]
            }, {
                $and: [
                    { 'date.dt_start': { $gt: '20210101' } },
                    { 'date.dt_end': { $in: ['', null] } }
                ]
            }
        ],
    }
}])