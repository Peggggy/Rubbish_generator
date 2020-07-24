function random(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateRubbish(title) {
  const target = {
    engineer: '工程師',
    designer: '設計師',
    entrepreneur: '創業家'
  }
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢', '賠一點錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常', '沒什麼', '還好']

  // const targets = { engineer: 'on' }

  let rubbish = ''
  if (title) {
    rubbish = `身為一個${target[title]}，${random(task.engineer)}，${random(phrase)}吧！`
  } else {
    return '請選擇一個對象'
  }

  return rubbish

}

module.exports = generateRubbish