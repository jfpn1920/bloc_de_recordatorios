Algoritmo bloc_de_recordatorios
    Definir opcion Como Entero
    Definir cantidad Como Entero
    cantidad <- 0
    Dimension titulo[100]
    Dimension descripcion[100]
    Dimension fecha[100]
    Dimension hora[100]
    Dimension prioridad[100]
    Dimension categoria[100]
    Dimension estado[100]
    Definir titulo, descripcion, fecha, hora Como Cadena
    Definir prioridad, categoria, estado Como Cadena
    //---------------------------------------------//
    //--|menu_principal_de_bloc_de_recordatorios|--//
    //---------------------------------------------//
    Repetir
        Escribir "==============================="
        Escribir "   BLOC DE RECORDATORIOS"
        Escribir "==============================="
        Escribir "1. Crear recordatorio"
        Escribir "2. Editar recordatorio"
        Escribir "3. Eliminar recordatorio"
        Escribir "4. Marcar como completado"
        Escribir "5. Mostrar recordatorios"
        Escribir "6. Salir"
        Escribir "==============================="
        Escribir "Seleccione una opcion:"
        Leer opcion
        Segun opcion Hacer
			//---------------------------//
			//--|crear_el_recordatorio|--//
			//---------------------------//
            1:
                cantidad <- cantidad + 1
                Escribir "Ingrese el titulo:"
                Leer titulo[cantidad]
                Escribir "Ingrese la descripcion:"
                Leer descripcion[cantidad]
                Escribir "Ingrese la fecha:"
                Leer fecha[cantidad]
                Escribir "Ingrese la hora:"
                Leer hora[cantidad]
                Escribir "Ingrese la prioridad:"
                Escribir "Alta - Media - Baja"
                Leer prioridad[cantidad]
                Escribir "Ingrese la categoria:"
                Escribir "Trabajo - Estudio - Personal - Compras"
                Leer categoria[cantidad]
                estado[cantidad] <- "Pendiente"
                Escribir "================================"
                Escribir "Recordatorio creado correctamente"
                Escribir "================================"
			//----------------------------//
			//--|editar_el_recordatorio|--//
			//----------------------------//
            2:
                Definir editar Como Entero
                Escribir "Ingrese el numero del recordatorio:"
                Leer editar
                Si editar <= cantidad Entonces
                    Escribir "Nuevo titulo:"
                    Leer titulo[editar]
                    Escribir "Nueva descripcion:"
                    Leer descripcion[editar]
                    Escribir "Nueva fecha:"
                    Leer fecha[editar]
                    Escribir "Nueva prioridad:"
                    Leer prioridad[editar]
                    Escribir "================================"
                    Escribir "Recordatorio editado"
                    Escribir "================================"
                SiNo
                    Escribir "Recordatorio no encontrado"
                FinSi
			//------------------------------//
			//--|eliminar_el_recordatorio|--//
			//------------------------------//
            3:
                Definir eliminar Como Entero
                Definir i Como Entero
                Escribir "Ingrese el numero del recordatorio:"
                Leer eliminar
                Si eliminar <= cantidad Entonces
                    Para i <- eliminar Hasta cantidad - 1 Hacer
                        titulo[i] <- titulo[i + 1]
                        descripcion[i] <- descripcion[i + 1]
                        fecha[i] <- fecha[i + 1]
                        hora[i] <- hora[i + 1]
                        prioridad[i] <- prioridad[i + 1]
                        categoria[i] <- categoria[i + 1]
                        estado[i] <- estado[i + 1]
                    FinPara
                    cantidad <- cantidad - 1
                    Escribir "================================"
                    Escribir "Recordatorio eliminado"
                    Escribir "================================"
                SiNo
                    Escribir "Recordatorio no encontrado"
                FinSi
			//----------------------------//
			//--|marcar_como_completado|--//
			//----------------------------//
            4:
                Definir completar Como Entero
                Escribir "Ingrese el numero del recordatorio:"
                Leer completar
                Si completar <= cantidad Entonces
                    estado[completar] <- "Completado"
                    Escribir "================================"
                    Escribir "Recordatorio completado"
                    Escribir "================================"
                SiNo
                    Escribir "Recordatorio no encontrado"
                FinSi
			//--------------------------------//
			//--|mostrar_como_recordatorios|--//
			//--------------------------------//
            5:
                Definir j Como Entero
                Si cantidad = 0 Entonces
                    Escribir "No hay recordatorios"
                SiNo
                    Para j <- 1 Hasta cantidad Hacer
                        Escribir "==============================="
                        Escribir "Recordatorio #", j
                        Escribir "Titulo: ", titulo[j]
                        Escribir "Descripcion: ", descripcion[j]
                        Escribir "Fecha: ", fecha[j]
                        Escribir "Hora: ", hora[j]
                        Escribir "Prioridad: ", prioridad[j]
                        Escribir "Categoria: ", categoria[j]
                        Escribir "Estado: ", estado[j]
                        Escribir "==============================="
                    FinPara
                FinSi
			//------------------------------//
			//--|salir_del_menu_principal|--//
			//------------------------------//
            6:
                Escribir "Saliendo del sistema..."
            De Otro Modo:
                Escribir "Opcion invalida"
        FinSegun
    Hasta Que opcion = 6	
FinAlgoritmo