import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "../index.css"
import ReactDOM from "react-dom";

import React, { useState, useEffect, useRef } from "react";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { ProductService } from "../service/ProductService";
import { Toast } from "primereact/toast";
import { Button } from "primereact/button";
import { FileUpload } from "primereact/fileupload";
import { Rating } from "primereact/rating";
import { Toolbar } from "primereact/toolbar";
import { RadioButton } from 'primereact/radiobutton';
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import "./DataGrid.css";
import CompEdit from "../CompEdit";
import Gridpopup from "../Gridpopup";
import { data } from "jquery";

export const DataGrid = () => {
    let emptyProduct = {
        id: null,
        name: "",
        image: null,
        description: "",
        category: null,
        price: 0,
        quantity: 0,
        rating: 0,
        inventoryStatus: "INSTOCK"
    };

    const [products, setProducts] = useState(null);
    const [productDialog, setProductDialog] = useState(false);

    /******************* my custom code *********************** */
    const [colData, setColData] = useState([]);
    const [addCol, setAddCol] = useState(false);
    const [colText, setColText] = useState("");
    const [rowData, setRowData] = useState([])
    const [tempRowData, setTempRowData] = useState({})
    const [onEdit, setOnEdit] = useState(false)
    const [sort, setSort] = useState(false);

    const [gridvalues, setGridValues] = useState({});


    const handelChange = (e) => {
        setTempRowData({ ...tempRowData, [e.target.name]: e.target.value })


    }


    /****************** data access by popup code ***************************** */

    const getData = (item) => {
        console.log("item is :", item);
        // setLabel(item);
        setGridValues({ ...item })
    }

    /****************** my custom code end *************** */

    const [deleteProductDialog, setDeleteProductDialog] = useState(false);
    const [deleteProductsDialog, setDeleteProductsDialog] = useState(false);
    const [product, setProduct] = useState(emptyProduct);
    const [selectedProducts, setSelectedProducts] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const [globalFilter, setGlobalFilter] = useState(null);
    const toast = useRef(null);
    const dt = useRef(null);
    // const productService = new ProductService();

    // useEffect(() => {
    //     productService.getProducts().then(data => setProducts(data));
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps



    const openNew = () => {
        setOnEdit(false)  //custom code
        setTempRowData({}) //custom code
        setProduct(emptyProduct);
        setSubmitted(false);
        setProductDialog(true);
    };

    /******************* my custom code start *********************** */
    const openNewCol = () => {
        setAddCol(true);
    };

    const HandelColSubmit = () => {
        colData.push({ name: colText, sort: sort });
        setSort(false);
        // colData.push(colText)
        setColText("");
        setAddCol(false);
    };



    /****************** my custom code end *************** */

    const hideDialog = () => {
        setSubmitted(false);
        setProductDialog(false);
    };

    const hideDeleteProductDialog = () => {
        setDeleteProductDialog(false);
    };

    const hideDeleteProductsDialog = () => {
        setDeleteProductsDialog(false);
    };


    //*************custom code start************** //
    const saveProduct = () => {
        if (onEdit) {
            const data = rowData.map((ele) => {
                if (ele.id === tempRowData.id) {
                    return {
                        ...tempRowData
                    }
                } else {
                    return {
                        ...ele
                    }
                }
            })
            setRowData(data)
        }
        else {
            const id = createId()
            rowData.push({ ...tempRowData, id: id })
        }
        setSubmitted(false);
        setProductDialog(false);
        setTempRowData({})
    };

    // **************** custom code end *****************//

    const editProduct = (product) => {
        setOnEdit(true);   // custom code
        setTempRowData({ ...product });  // custom code
        setProductDialog(true);
    };

    const confirmDeleteProduct = (product) => {
        setProduct(product);
        setDeleteProductDialog(true);
    };

    const deleteProduct = () => {
        let _products = rowData.filter((val) => val.id !== product.id);
        setRowData(_products); //custom code
        setDeleteProductDialog(false);
        setProduct(emptyProduct);
        toast.current.show({
            severity: "success",
            summary: "Successful",
            detail: "Product Deleted",
            life: 3000
        });
    };

    const createId = () => {
        let id = "";
        let chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (let i = 0; i < 5; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    };

    const importCSV = (e) => {
        const file = e.files[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            const csv = e.target.result;
            const data = csv.split("\n");
            const cols = data[0].replace(/['"]+/g, "").split(",");
            data.shift();

            const importedData = data.map((d) => {
                d = d.split(",");
                const processedData = cols.reduce((obj, c, i) => {
                    c =
                        c === "Status"
                            ? "inventoryStatus"
                            : c === "Reviews"
                                ? "rating"
                                : c.toLowerCase();
                    obj[c] = d[i].replace(/['"]+/g, "");
                    (c === "price" || c === "rating") && (obj[c] = parseFloat(obj[c]));
                    return obj;
                }, {});

                processedData["id"] = createId();
                return processedData;
            });

            const _products = [...products, ...importedData];

            setProducts(_products);
        };

        reader.readAsText(file, "UTF-8");
    };

    const exportCSV = () => {
        dt.current.exportCSV();
    };

    const confirmDeleteSelected = () => {
        setDeleteProductsDialog(true);
    };

    const deleteSelectedProducts = () => {
        let _products = products.filter((val) => !selectedProducts.includes(val));
        setProducts(_products);
        setDeleteProductsDialog(false);
        setSelectedProducts(null);
        toast.current.show({
            severity: "success",
            summary: "Successful",
            detail: "Products Deleted",
            life: 3000
        });
    };



    const leftToolbarTemplate = () => {
        return (
            <React.Fragment>
                <Button
                    label="New"
                    icon="pi pi-plus"
                    className="p-button-success mr-2"
                    onClick={openNew}
                />
                <Button
                    label="Delete"
                    icon="pi pi-trash"
                    className="p-button-danger"
                    onClick={confirmDeleteSelected}


                />

                {/********************* my custom code start **************************/}
                <Button
                    label="Add Column"
                    icon="pi pi-plus"
                    className="p-button-success ml-2"
                    onClick={openNewCol}
                />
                {/******************** my custome code end *********************/}
            </React.Fragment>
        );
    };

    const actionBodyTemplate = (rowData) => {
        return (
            <React.Fragment>
                <Button icon="pi pi-pencil" className="p-button-rounded p-button-success mr-2" onClick={() => editProduct(rowData)} />
                <Button icon="pi pi-trash" className="p-button-rounded p-button-warning" onClick={() => confirmDeleteProduct(rowData)} />
            </React.Fragment>
        );
    }
    const rightToolbarTemplate = () => {
        return (
            <React.Fragment>
                <FileUpload
                    mode="basic"
                    name="demo[]"
                    auto
                    url="https://primefaces.org/primereact/showcase/upload.php"
                    accept=".csv"
                    chooseLabel="Import"
                    className="mr-2 inline-block"
                    onUpload={importCSV}
                />
                <Button
                    label="Export"
                    icon="pi pi-upload"
                    className="p-button-help"
                    onClick={exportCSV}
                />
            </React.Fragment>
        );
    };





    const header = (
        <div className="table-header">
            <h5 className="mx-0 my-1">Manage Products</h5>
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText
                    type="search"
                    onInput={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Search..."
                />
            </span>
        </div>
    );
    const productDialogFooter = (
        <React.Fragment>
            <Button
                label="Cancel"
                icon="pi pi-times"
                className="p-button-text"
                onClick={hideDialog}
            />
            <Button
                label="Save"
                icon="pi pi-check"
                className="p-button-text"
                onClick={saveProduct}
            />
        </React.Fragment>
    );
    const deleteProductDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                className="p-button-text"
                onClick={hideDeleteProductDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                className="p-button-text"
                onClick={deleteProduct}
            />
        </React.Fragment>
    );
    const deleteProductsDialogFooter = (
        <React.Fragment>
            <Button
                label="No"
                icon="pi pi-times"
                className="p-button-text"
                onClick={hideDeleteProductsDialog}
            />
            <Button
                label="Yes"
                icon="pi pi-check"
                className="p-button-text"
                onClick={deleteSelectedProducts}
            />
        </React.Fragment>
    );

    return (
        <div className="datatable-crud-demo">

            <label style={{ fontSize: "20px", padding: "1rem 0.5rem" }}>{gridvalues.lable}</label>

            <Toast ref={toast} />

            <div className="card">
                <Toolbar
                    className="mb-4"
                    left={leftToolbarTemplate}
                    right={rightToolbarTemplate}
                ></Toolbar>

                <DataTable
                    ref={dt}
                    value={rowData} // custom code
                    selection={selectedProducts}
                    onSelectionChange={(e) => setSelectedProducts(e.value)}
                    dataKey="id"
                    paginator
                    rows={10}
                    rowsPerPageOptions={[5, 10, 25]}
                    paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
                    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
                    globalFilter={globalFilter}
                    header={header}
                    responsiveLayout="scroll"
                >
                    <Column
                        selectionMode="multiple"
                        headerStyle={{ width: "3rem" }}
                        exportable={false}
                    ></Column>

                    {/* /******************* my cutom code start ****************  */}

                    {colData.map((ele) => (
                        <Column
                            header={ele.name}
                            field={ele.name}
                            sortable={ele.sort}
                        />
                    ))}


                    {/* /******************* my custom code end ***************************  */}

                    <Column body={actionBodyTemplate}
                        exportable={false}
                        style={{ minWidth: '8rem' }}>
                    </Column>

                </DataTable>
            </div>

            <Dialog
                visible={productDialog}
                style={{ width: "450px" }}
                header="Product Details"
                modal
                className="p-fluid"
                footer={productDialogFooter}
                onHide={hideDialog}
            >

                {/***************** custom code start ********************/}

                {colData.map((ele) => (
                    <>
                        <label htmlFor={ele.name}>{ele.name}</label>
                        <InputText
                            id={ele}
                            value={tempRowData.name}
                            label={tempRowData.name}
                            name={ele.name}
                            onChange={handelChange}
                            required
                            autoFocus
                        />
                    </>
                ))}

                {/***************** custom code end ********************/}

            </Dialog>

            <Dialog
                visible={deleteProductDialog}
                style={{ width: "450px" }}
                header="Confirm"
                modal
                footer={deleteProductDialogFooter}
                onHide={hideDeleteProductDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {product && (
                        <span>
                            Are you sure you want to delete <b>{product.name}</b>?
                        </span>
                    )}
                </div>
            </Dialog>

            <Dialog
                visible={deleteProductsDialog}
                style={{ width: "450px" }}
                header="Confirm"
                modal
                footer={deleteProductsDialogFooter}
                onHide={hideDeleteProductsDialog}
            >
                <div className="confirmation-content">
                    <i
                        className="pi pi-exclamation-triangle mr-3"
                        style={{ fontSize: "2rem" }}
                    />
                    {product && (
                        <span>Are you sure you want to delete the selected products?</span>
                    )}
                </div>
            </Dialog>

            {/* /**********************  my custom code start ********************  */}

            <Dialog
                visible={addCol}
                style={{ width: "450px" }}
                header="Confirm"
                modal
                onHide={() => setAddCol(false)}
            >
                <div className="confirmation-content">
                    <InputText
                        id="name"
                        value={colText}
                        onChange={(e) => setColText(e.target.value)}
                        required
                        autoFocus
                    />

                    <Checkbox
                        inputId="Sort"
                        onChange={(e) => setSort(e.checked)}
                        checked={sort}
                    >

                    </Checkbox>
                    <label htmlFor="Sort">
                        sorting
                    </label>





                    <Button onClick={() => setAddCol(false)}>Cancel</Button>
                    <Button onClick={HandelColSubmit}>Submit</Button>
                </div>
            </Dialog>

            {/* /************************** my custom code end ******************************  */}


            {/* <CompEdit /> */}
            <Gridpopup onSubmit={getData} />
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<DataGrid />, rootElement);
