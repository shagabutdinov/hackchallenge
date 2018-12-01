refining_room = Room.create!(
  name: 'Цех переработки',
  schema: '/public/rooms/refining.png',
)

cracking_room = Room.create!(
  name: 'Цех крекинга',
  schema: '/public/rooms/cracking.png',
)

storage_room = Room.create!(
  name: 'Склад',
  schema: '/public/rooms/storage.png',
)

director_room = Room.create!(
  name: 'Офис директора',
  schema: '/public/rooms/director.png',
)

Camera.create!(
  room: refining_room,
  name: 'Лифт',
  video: '/public/videos/vc_07_/85._07.mp4',
  position_x: 481,
  position_y: 246,
  position_angle: 180,
)

device_camera = Camera.create!(
  room: refining_room,
  name: 'Установка',
  video: '/public/videos/l_07_persons_1_01.mp4',
  position_x: 15,
  position_y: 32,
  position_angle: 25,
)

barrel_camera = Camera.create!(
  room: refining_room,
  name: 'Бочки',
  video: '/public/videos/l_05_persons_0_smoke_1_02.mp4',
  position_x: 15,
  position_y: 375,
  position_angle: 0,
)

Camera.create!(
  room: cracking_room,
  name: 'Ворота',
  video: '/public/videos/vc_07_/44._07 2.mp4',
  position_x: 15,
  position_y: 246,
  position_angle: 0,
)

pipes_camera = Camera.create!(
  room: cracking_room,
  name: 'Трубы',
  video: '/public/videos/l_05_persons_0_smoke_1_01.mp4',
  position_x: 481,
  position_y: 246,
  position_angle: 135,
)

Camera.create!(
  room: storage_room,
  name: 'Подъёмник',
  video: '/public/videos/vc_07_/97._07.mp4',
  position_x: 15,
  position_y: 246,
  position_angle: 0,
)

Camera.create!(
  room: storage_room,
  name: 'Двери',
  video: '/public/videos/vc_11_/4F._11.mp4',
  position_x: 479,
  position_y: 479,
  position_angle: 225,
)

Camera.create!(
  room: storage_room,
  name: 'Полки',
  video: '/public/videos/vc_11_/57._11.mp4',
  position_x: 479,
  position_y: 32,
  position_angle: 135,
)

director_camera = Camera.create!(
  room: director_room,
  name: 'Приёмная',
  video: '/public/videos/vc_68_persons_0_01.mp4',
  position_x: 479,
  position_y: 479,
  position_angle: 225,
)

Camera.create!(
  room: director_room,
  name: 'Конференц-зал',
  video: '/public/videos/vc_07_/4B._07.mp4',
  position_x: 479,
  position_y: 32,
  position_angle: 135,
)

Event.create!(
  camera: director_camera,
  reason: 'Директор опять пьёт пиво с утра',
  priority: 'high',
  status: 'new',
  timestamp: '2018-12-01 09:55:12',
)

Event.create!(
  camera: device_camera,
  reason: 'Человек в помещении момент работы установки',
  priority: 'high',
  status: 'new',
  timestamp: '2018-12-01 10:14:12',
)

Event.create!(
  camera: barrel_camera,
  reason: 'Наледь на оборудовании',
  priority: 'low',
  status: 'new',
  timestamp: '2018-12-01 10:28:14',
)

Event.create!(
  camera: device_camera,
  reason: 'Работа установки вне графика',
  priority: 'low',
  status: 'resolved',
  timestamp: '2018-12-01 10:54:32',
)

Event.create!(
  camera: pipes_camera,
  reason: 'Задымление',
  priority: 'high',
  status: 'resolved',
  timestamp: '2018-12-01 11:02:33',
)

Event.create!(
  camera: barrel_camera,
  reason: 'Человек в рабочей зоне в неустановленное время',
  priority: 'low',
  status: 'resolved',
  timestamp: '2018-12-01 11:12:55',
)

Event.create!(
  camera: pipes_camera,
  reason: 'Человек в задымлененном помещении',
  priority: 'low',
  status: 'resolved',
  timestamp: '2018-12-01 11:38:59',
)
