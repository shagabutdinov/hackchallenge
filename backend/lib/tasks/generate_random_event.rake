task :generate_random_event do
  reasons_who = [
    'Человек обнаружен',
    'Человек без униформы обнаружен',
    'Жидкость обнаружена',
    'Наледь обнаружена',
    'Пламя обнаружено',
    'Огонь обнаружен',
    'Взрыв обнаружен',
    'Дым обнаружен',
    'Газ обнаружен',
    'Взрывоопасный газ обнаружен',
    'Задымление обнаружено',
    'Внештатная ситуация обнаружена',
    'Директор обнаружен',
  ]

  reasons_how = [
    'в запрещённой зоне',
    'в неустановленное время',
    'во внерабочее время',
    'во время опасного процесса',
  ]

  Event.create!(
    camera: Camera.all.sample,
    reason: [reasons_who.sample, reasons_how.sample].join(' '),
    priority: ['low', 'high'].sample,
    status: 'new',
    timestamp: Time.zone.now,
  )
end
