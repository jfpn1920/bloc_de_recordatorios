import java.util.ArrayList;
import java.util.Scanner;
public class bloc_de_recordatorios {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int opcion = 0;
        int cantidad = 0;
        ArrayList<String> titulo = new ArrayList<>();
        ArrayList<String> descripcion = new ArrayList<>();
        ArrayList<String> fecha = new ArrayList<>();
        ArrayList<String> hora = new ArrayList<>();
        ArrayList<String> prioridad = new ArrayList<>();
        ArrayList<String> categoria = new ArrayList<>();
        ArrayList<String> estado = new ArrayList<>();
        //---------------------------------------------//
        //--|menu_principal_de_bloc_de_recordatorios|--//
        //---------------------------------------------//
        while (opcion != 6) {
            System.out.println("===============================");
            System.out.println("   BLOC DE RECORDATORIOS");
            System.out.println("===============================");
            System.out.println("1. Crear recordatorio");
            System.out.println("2. Editar recordatorio");
            System.out.println("3. Eliminar recordatorio");
            System.out.println("4. Marcar como completado");
            System.out.println("5. Mostrar recordatorios");
            System.out.println("6. Salir");
            System.out.println("===============================");
            System.out.print("Seleccione una opcion: ");
            opcion = entrada.nextInt();
            entrada.nextLine();
            //---------------------------//
            //--|crear_el_recordatorio|--//
            //---------------------------//
            if (opcion == 1) {
                cantidad++;
                System.out.print("Ingrese el titulo: ");
                String nuevo_titulo = entrada.nextLine();
                System.out.print("Ingrese la descripcion: ");
                String nueva_descripcion = entrada.nextLine();
                System.out.print("Ingrese la fecha: ");
                String nueva_fecha = entrada.nextLine();
                System.out.print("Ingrese la hora: ");
                String nueva_hora = entrada.nextLine();
                System.out.println("Alta - Media - Baja");
                System.out.print("Ingrese la prioridad: ");
                String nueva_prioridad = entrada.nextLine();
                System.out.println("Trabajo - Estudio - Personal - Compras");
                System.out.print("Ingrese la categoria: ");
                String nueva_categoria = entrada.nextLine();
                String nuevo_estado = "Pendiente";
                titulo.add(nuevo_titulo);
                descripcion.add(nueva_descripcion);
                fecha.add(nueva_fecha);
                hora.add(nueva_hora);
                prioridad.add(nueva_prioridad);
                categoria.add(nueva_categoria);
                estado.add(nuevo_estado);
                System.out.println("================================");
                System.out.println("Recordatorio creado correctamente");
                System.out.println("================================");
            }
            //----------------------------//
            //--|editar_el_recordatorio|--//
            //----------------------------//
            else if (opcion == 2) {
                System.out.print("Ingrese el numero del recordatorio: ");
                int editar = entrada.nextInt();
                entrada.nextLine();
                if (editar <= cantidad && editar > 0) {
                    int indice = editar - 1;
                    System.out.print("Nuevo titulo: ");
                    titulo.set(indice, entrada.nextLine());
                    System.out.print("Nueva descripcion: ");
                    descripcion.set(indice, entrada.nextLine());
                    System.out.print("Nueva fecha: ");
                    fecha.set(indice, entrada.nextLine());
                    System.out.print("Nueva prioridad: ");
                    prioridad.set(indice, entrada.nextLine());
                    System.out.println("================================");
                    System.out.println("Recordatorio editado");
                    System.out.println("================================");
                } else {
                    System.out.println("Recordatorio no encontrado");
                }
            }
            //------------------------------//
            //--|eliminar_el_recordatorio|--//
            //------------------------------//
            else if (opcion == 3) {
                System.out.print("Ingrese el numero del recordatorio: ");
                int eliminar = entrada.nextInt();
                entrada.nextLine();
                if (eliminar <= cantidad && eliminar > 0) {
                    int indice = eliminar - 1;
                    titulo.remove(indice);
                    descripcion.remove(indice);
                    fecha.remove(indice);
                    hora.remove(indice);
                    prioridad.remove(indice);
                    categoria.remove(indice);
                    estado.remove(indice);
                    cantidad--;
                    System.out.println("================================");
                    System.out.println("Recordatorio eliminado");
                    System.out.println("================================");
                } else {
                    System.out.println("Recordatorio no encontrado");
                }
            }
            //----------------------------//
            //--|marcar_como_completado|--//
            //----------------------------//
            else if (opcion == 4) {
                System.out.print("Ingrese el numero del recordatorio: ");
                int completar = entrada.nextInt();
                entrada.nextLine();
                if (completar <= cantidad && completar > 0) {
                    int indice = completar - 1;
                    estado.set(indice, "Completado");
                    System.out.println("================================");
                    System.out.println("Recordatorio completado");
                    System.out.println("================================");
                } else {
                    System.out.println("Recordatorio no encontrado");
                }
            }
            //--------------------------------//
            //--|mostrar_como_recordatorios|--//
            //--------------------------------//
            else if (opcion == 5) {
                if (cantidad == 0) {
                    System.out.println("No hay recordatorios");
                } else {
                    for (int j = 0; j < cantidad; j++) {
                        System.out.println("===============================");
                        System.out.println("Recordatorio # " + (j + 1));
                        System.out.println("Titulo: " + titulo.get(j));
                        System.out.println("Descripcion: " + descripcion.get(j));
                        System.out.println("Fecha: " + fecha.get(j));
                        System.out.println("Hora: " + hora.get(j));
                        System.out.println("Prioridad: " + prioridad.get(j));
                        System.out.println("Categoria: " + categoria.get(j));
                        System.out.println("Estado: " + estado.get(j));
                        System.out.println("===============================");
                    }
                }
            }
            //------------------------------//
            //--|salir_del_menu_principal|--//
            //------------------------------//
            else if (opcion == 6) {
                System.out.println("Saliendo del sistema...");
            }
            else {
                System.out.println("Opcion invalida");
            }
        }
        entrada.close();
    }
}