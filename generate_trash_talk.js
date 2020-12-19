//define trash talk 
const task = {
  developer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '很容易', '很快', '很正常']


function draw(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index]
}

function generateTrashTalk(position) {
  if (!position) return '明槍易躲、暗箭難防，失主請記得選擇你要噴的人'
  let positionInMandarin = '';
  if (position === 'developer') {
    positionInMandarin = '工程師';
  } else if (position === 'designer') {
    positionInMandarin = '設計師';
  } else if (position === 'entrepreneur') {
    positionInMandarin = '創業家'
  }
  const action = draw(task[position]); //no task.career use task['keyName']
  const adjective = draw(phrase)

  return `身為一個${positionInMandarin}，${action}，${adjective}吧?`
}

module.exports = generateTrashTalk