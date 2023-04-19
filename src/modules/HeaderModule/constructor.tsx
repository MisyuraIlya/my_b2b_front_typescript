import Container from "../../components/ui/Container/Container";
import Button from '../../components/ui/Button/Button';
import { API_BACKEND } from '../../utils/constants/API';
import { onSuccessAlert } from '../../utils/sweetAlert/sweetAlert';
import { APP_CONFIG } from '../../appconfig';
import type { ICategory } from '../../models/category.interface';
import { Z_INDEX } from "../../appconfig";
import AddToCart from '../../components/global/AddToCart/AddToCart'
import type { IProduct } from "../CatalogModule/constructor";
import Modal from '../../components/global/Modal/Modal'
import PopUpCard from '../../components/global/PopUpCard/PopUpCard'
import {defaultProduct} from '../../models/product.interface';
// imported global css with styles
export {Container, Button, API_BACKEND, onSuccessAlert, APP_CONFIG, ICategory, Z_INDEX, AddToCart, IProduct, Modal, PopUpCard, defaultProduct}