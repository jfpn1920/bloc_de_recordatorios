opcion = 0
cantidad = 0
titulo = []
descripcion = []
fecha = []
hora = []
prioridad = []
categoria = []
estado = []
#---------------------------------------------#
#--|menu_principal_de_bloc_de_recordatorios|--#
#---------------------------------------------#
while opcion != 6:
    print("===============================")
    print("   BLOC DE RECORDATORIOS")
    print("===============================")
    print("1. Crear recordatorio")
    print("2. Editar recordatorio")
    print("3. Eliminar recordatorio")
    print("4. Marcar como completado")
    print("5. Mostrar recordatorios")
    print("6. Salir")
    print("===============================")
    opcion = int(input("Seleccione una opcion: "))
    #---------------------------#
    #--|crear_el_recordatorio|--#
    #---------------------------#
    if opcion == 1:
        cantidad += 1
        nuevo_titulo = input("Ingrese el titulo: ")
        nueva_descripcion = input("Ingrese la descripcion: ")
        nueva_fecha = input("Ingrese la fecha: ")
        nueva_hora = input("Ingrese la hora: ")
        print("Alta - Media - Baja")
        nueva_prioridad = input("Ingrese la prioridad: ")
        print("Trabajo - Estudio - Personal - Compras")
        nueva_categoria = input("Ingrese la categoria: ")
        nuevo_estado = "Pendiente"
        titulo.append(nuevo_titulo)
        descripcion.append(nueva_descripcion)
        fecha.append(nueva_fecha)
        hora.append(nueva_hora)
        prioridad.append(nueva_prioridad)
        categoria.append(nueva_categoria)
        estado.append(nuevo_estado)
        print("================================")
        print("Recordatorio creado correctamente")
        print("================================")
    #----------------------------#
    #--|editar_el_recordatorio|--#
    #----------------------------#
    elif opcion == 2:
        editar = int(input("Ingrese el numero del recordatorio: "))
        if editar <= cantidad and editar > 0:
            indice = editar - 1
            titulo[indice] = input("Nuevo titulo: ")
            descripcion[indice] = input("Nueva descripcion: ")
            fecha[indice] = input("Nueva fecha: ")
            prioridad[indice] = input("Nueva prioridad: ")
            print("================================")
            print("Recordatorio editado")
            print("================================")
        else:
            print("Recordatorio no encontrado")
    #------------------------------#
    #--|eliminar_el_recordatorio|--#
    #------------------------------#
    elif opcion == 3:
        eliminar = int(input("Ingrese el numero del recordatorio: "))
        if eliminar <= cantidad and eliminar > 0:
            indice = eliminar - 1
            titulo.pop(indice)
            descripcion.pop(indice)
            fecha.pop(indice)
            hora.pop(indice)
            prioridad.pop(indice)
            categoria.pop(indice)
            estado.pop(indice)
            cantidad -= 1
            print("================================")
            print("Recordatorio eliminado")
            print("================================")
        else:
            print("Recordatorio no encontrado")
    #----------------------------#
    #--|marcar_como_completado|--#
    #----------------------------#
    elif opcion == 4:
        completar = int(input("Ingrese el numero del recordatorio: "))
        if completar <= cantidad and completar > 0:
            indice = completar - 1
            estado[indice] = "Completado"
            print("================================")
            print("Recordatorio completado")
            print("================================")
        else:
            print("Recordatorio no encontrado")
    #--------------------------------#
    #--|mostrar_como_recordatorios|--#
    #--------------------------------#
    elif opcion == 5:
        if cantidad == 0:
            print("No hay recordatorios")
        else:
            for j in range(cantidad):
                print("===============================")
                print("Recordatorio #", j + 1)
                print("Titulo:", titulo[j])
                print("Descripcion:", descripcion[j])
                print("Fecha:", fecha[j])
                print("Hora:", hora[j])
                print("Prioridad:", prioridad[j])
                print("Categoria:", categoria[j])
                print("Estado:", estado[j])
                print("===============================")
    #------------------------------#
    #--|salir_del_menu_principal|--#
    #------------------------------#
    elif opcion == 6:
        print("Saliendo del sistema...")
    else:
        print("Opcion invalida")