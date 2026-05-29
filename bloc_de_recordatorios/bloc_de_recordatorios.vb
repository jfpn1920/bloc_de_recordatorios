Imports System
Imports System.Collections.Generic
Module bloc_de_recordatorios
    Sub Main(args As String())
        Dim opcion As Integer = 0
        Dim cantidad As Integer = 0
        Dim titulo As New List(Of String)
        Dim descripcion As New List(Of String)
        Dim fecha As New List(Of String)
        Dim hora As New List(Of String)
        Dim prioridad As New List(Of String)
        Dim categoria As New List(Of String)
        Dim estado As New List(Of String)
        '---------------------------------------------'
        '--|menu_principal_de_bloc_de_recordatorios|--'
        '---------------------------------------------'
        While opcion <> 6
            Console.WriteLine("===============================")
            Console.WriteLine("   BLOC DE RECORDATORIOS")
            Console.WriteLine("===============================")
            Console.WriteLine("1. Crear recordatorio")
            Console.WriteLine("2. Editar recordatorio")
            Console.WriteLine("3. Eliminar recordatorio")
            Console.WriteLine("4. Marcar como completado")
            Console.WriteLine("5. Mostrar recordatorios")
            Console.WriteLine("6. Salir")
            Console.WriteLine("===============================")
            Console.Write("Seleccione una opcion: ")
            opcion = Convert.ToInt32(Console.ReadLine())
            '---------------------------'
            '--|crear_el_recordatorio|--'
            '---------------------------'
            If opcion = 1 Then
                cantidad += 1
                Console.Write("Ingrese el titulo: ")
                Dim nuevo_titulo As String = Console.ReadLine()
                Console.Write("Ingrese la descripcion: ")
                Dim nueva_descripcion As String = Console.ReadLine()
                Console.Write("Ingrese la fecha: ")
                Dim nueva_fecha As String = Console.ReadLine()
                Console.Write("Ingrese la hora: ")
                Dim nueva_hora As String = Console.ReadLine()
                Console.WriteLine("Alta - Media - Baja")
                Console.Write("Ingrese la prioridad: ")
                Dim nueva_prioridad As String = Console.ReadLine()
                Console.WriteLine("Trabajo - Estudio - Personal - Compras")
                Console.Write("Ingrese la categoria: ")
                Dim nueva_categoria As String = Console.ReadLine()
                Dim nuevo_estado As String = "Pendiente"
                titulo.Add(nuevo_titulo)
                descripcion.Add(nueva_descripcion)
                fecha.Add(nueva_fecha)
                hora.Add(nueva_hora)
                prioridad.Add(nueva_prioridad)
                categoria.Add(nueva_categoria)
                estado.Add(nuevo_estado)
                Console.WriteLine("================================")
                Console.WriteLine("Recordatorio creado correctamente")
                Console.WriteLine("================================")
                '----------------------------'
                '--|editar_el_recordatorio|--'
                '----------------------------'
            ElseIf opcion = 2 Then
                Console.Write("Ingrese el numero del recordatorio: ")
                Dim editar As Integer = Convert.ToInt32(Console.ReadLine())
                If editar <= cantidad And editar > 0 Then
                    Dim indice As Integer = editar - 1
                    Console.Write("Nuevo titulo: ")
                    titulo(indice) = Console.ReadLine()
                    Console.Write("Nueva descripcion: ")
                    descripcion(indice) = Console.ReadLine()
                    Console.Write("Nueva fecha: ")
                    fecha(indice) = Console.ReadLine()
                    Console.Write("Nueva prioridad: ")
                    prioridad(indice) = Console.ReadLine()
                    Console.WriteLine("================================")
                    Console.WriteLine("Recordatorio editado")
                    Console.WriteLine("================================")
                Else
                    Console.WriteLine("Recordatorio no encontrado")
                End If
                '------------------------------'
                '--|eliminar_el_recordatorio|--'
                '------------------------------'
            ElseIf opcion = 3 Then
                Console.Write("Ingrese el numero del recordatorio: ")
                Dim eliminar As Integer = Convert.ToInt32(Console.ReadLine())
                If eliminar <= cantidad And eliminar > 0 Then
                    Dim indice As Integer = eliminar - 1
                    titulo.RemoveAt(indice)
                    descripcion.RemoveAt(indice)
                    fecha.RemoveAt(indice)
                    hora.RemoveAt(indice)
                    prioridad.RemoveAt(indice)
                    categoria.RemoveAt(indice)
                    estado.RemoveAt(indice)
                    cantidad -= 1
                    Console.WriteLine("================================")
                    Console.WriteLine("Recordatorio eliminado")
                    Console.WriteLine("================================")
                Else
                    Console.WriteLine("Recordatorio no encontrado")
                End If
                '----------------------------'
                '--|marcar_como_completado|--'
                '----------------------------'
            ElseIf opcion = 4 Then
                Console.Write("Ingrese el numero del recordatorio: ")
                Dim completar As Integer = Convert.ToInt32(Console.ReadLine())
                If completar <= cantidad And completar > 0 Then
                    Dim indice As Integer = completar - 1
                    estado(indice) = "Completado"
                    Console.WriteLine("================================")
                    Console.WriteLine("Recordatorio completado")
                    Console.WriteLine("================================")
                Else
                    Console.WriteLine("Recordatorio no encontrado")
                End If
                '--------------------------------'
                '--|mostrar_como_recordatorios|--'
                '--------------------------------'
            ElseIf opcion = 5 Then
                If cantidad = 0 Then
                    Console.WriteLine("No hay recordatorios")
                Else
                    For j As Integer = 0 To cantidad - 1
                        Console.WriteLine("===============================")
                        Console.WriteLine("Recordatorio # " & (j + 1))
                        Console.WriteLine("Titulo: " & titulo(j))
                        Console.WriteLine("Descripcion: " & descripcion(j))
                        Console.WriteLine("Fecha: " & fecha(j))
                        Console.WriteLine("Hora: " & hora(j))
                        Console.WriteLine("Prioridad: " & prioridad(j))
                        Console.WriteLine("Categoria: " & categoria(j))
                        Console.WriteLine("Estado: " & estado(j))
                        Console.WriteLine("===============================")
                    Next
                End If
                '------------------------------'
                '--|salir_del_menu_principal|--'
                '------------------------------'
            ElseIf opcion = 6 Then
                Console.WriteLine("Saliendo del sistema...")
            Else
                Console.WriteLine("Opcion invalida")
            End If
        End While
    End Sub
End Module