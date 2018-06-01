Mock.mock('http://api/students/\\d+', 'get', {
    // 属性 list 的值是一个数组，其中含有 1 到 3 个元素
    'student': {
        'id': '@id',
        'name': '@name()'
    }
});