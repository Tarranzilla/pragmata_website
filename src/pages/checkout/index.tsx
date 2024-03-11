import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

export default function Checkout() {
    const dispatch = useDispatch();
    initMercadoPago("TEST-793c5e04-727f-4f79-9c94-2eec92225301");

    const mercadoPagoSlice = useSelector((state: RootState) => state.mercadoPago);

    return (
        <div>
            <h1>{mercadoPagoSlice.preferenceId}</h1>
            <div id="wallet_container" className="Wallet">
                <Wallet initialization={{ preferenceId: mercadoPagoSlice.preferenceId }} customization={{ texts: { valueProp: "smart_option" } }} />
            </div>
        </div>
    );
}
