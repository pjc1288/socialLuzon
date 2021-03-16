
import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

const AdminIndex = () => {
    return (
 
        <Admin>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 pt-5 pb-5">
                    <h2>Panel de Control Administrador</h2>
                </div>
                <div className="col-md-4">
                        <li className="list-group-item">
                                    <Link href="/admin/crud/blog">
                                        <a>Nuevo Contenido</a>
                                    </Link>
                                </li>
                    <ul class="list-group">
                        <li className="list-group-item">
                            <Link href="/admin/crud/category-tag">
                                <a>Nueva Categoría</a>
                            </Link>
                        </li>

                        <li className="list-group-item">
                            <Link href="/admin/crud/category-tag">
                                <a>Crear Tag</a>
                            </Link>
                        </li>

                        <li className="list-group-item">
                                    <Link href="/admin/crud/blogs">
                                        <a>Editar Contenido</a>
                                    </Link>
                                </li>
                    </ul>
                </div>
                <div className="col-md-8">Columna derecha</div>
            </div>
        </div>
    </Admin>

    );
};

export default AdminIndex;