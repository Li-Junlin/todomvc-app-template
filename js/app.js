(function (Vue) {
	const items = [
		{ id: 1, content: 'vue', completed: false },
		{ id: 2, content: 'Java', completed: false },
		{ id: 3, content: 'Pythen', completed: false }
	]

	new Vue({
		el: "#todoapp",
		data: {
			itemId: 3,
			items
		},
		computed: {
			remaining() {
				const unItems = this.items.filter(function (item) {
					return !item.completed
				})
				return unItems.length
			}
		},
		methods: {
			addItem(event) {
				const content = event.target.value.trim();
				console.log("添加类容：", content)
				// 1、获取输入文本类容
				// 2、判断是否为空
				if (!content.length) {
					console.log("添加类容为空！")
					return
				}
				// 3、添加item
				items.push(
					{ id: ++this.itemId, content, completed: false }
				)
				// 4、清空输入框
				event.target.value = ''
				console.log("添加成功！")
			}
		}
	})
})(Vue);
