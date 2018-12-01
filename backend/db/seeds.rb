refining_room = Room.create!(name: 'Цех переработки')
hydrocracking_room = Room.create!(name: 'Цех крекинга')
storage_room = Room.create!(name: 'Склад')
director_room = Room.create!(name: 'Офис директора')

Camera.create!(room: refining_room, name: 'Лифт')
device_camera = Camera.create!(room: refining_room, name: 'Установка')
barrel_camera = Camera.create!(room: refining_room, name: 'Бочки')

Camera.create!(room: hydrocracking_room, name: 'Ворота')
pipes_camera = Camera.create!(room: hydrocracking_room, name: 'Трубы')
Camera.create!(room: hydrocracking_room, name: 'Подъёмник')

Camera.create!(room: storage_room, name: 'Двери')
Camera.create!(room: storage_room, name: 'Полки')

Camera.create!(room: director_room, name: 'Приёмная')
Camera.create!(room: director_room, name: 'Конференц-зал')

Event.create!(
  camera: barrel_camera,
  reason: 'Директор опять пьёт пиво с утра',
  priority: 'high',
  status: 'new',
  timestamp: '2018-12-01 09:55:12',
)

Event.create!(
  camera: device_camera,
  reason: 'Человек без формы в момент работы плавильной установки',
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
  reason: 'Работа плавильной установки вне графика',
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
  reason: 'Человек в рабочей зоне во внерабочее время',
  priority: 'low',
  status: 'resolved',
  timestamp: '2018-12-01 11:12:55',
)

Event.create!(
  camera: pipes_camera,
  reason: 'Человек в лежачем положении',
  priority: 'low',
  status: 'resolved',
  timestamp: '2018-12-01 11:38:59',
)
