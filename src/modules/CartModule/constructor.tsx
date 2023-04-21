import Button2 from '../../components/ui/Button2/Button2';
import { AddToCart } from '../CatalogModule/constructor';
import { useActions } from '@/components/hooks/useActions';
import { useTypedSelector } from '@/components/hooks/useTypedSelector';
import Modal from '../../components/global/Modal/Modal'
import PopUpCard from '../../components/global/PopUpCard/PopUpCard';
import type {IProduct} from '../../models/product.interface';
import { defaultProduct } from '../../models/product.interface';
import { useCart } from '@/components/hooks/useCart';
import TextArea from '@/components/ui/TextArea/TextArea';
export {Button2, AddToCart, useActions, useTypedSelector, Modal ,PopUpCard, IProduct, defaultProduct,useCart, TextArea}