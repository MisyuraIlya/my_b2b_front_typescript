import Container from "../../components/ui/Container/Container";
import Button from '../../components/ui/Button/Button';
import { API_BACKEND } from '../../utils/constants/API';
import { onSuccessAlert } from '../../utils/sweetAlert/sweetAlert';
import { APP_CONFIG } from '../../appconfig';
import type { ICategory } from '../../models/category.interface';
import { Z_INDEX } from "../../appconfig";
// imported global css with styles
export {Container, Button, API_BACKEND, onSuccessAlert, APP_CONFIG, ICategory, Z_INDEX}