import React, { Component } from "react";
import $ from "jquery";
class Toko extends React.Component {
    constructor() {
        super();
        this.state = {
            stok: [
                { id:"1", barang: "Bunga Matahari", harga: "25000", jumlah: "2" },
                { id:"2",barang: "Bunga Melati", harga: "20000", jumlah: "5" },
                { id:"3",barang: "Bunga Sepatu", harga: "35000", jumlah: "1" },
            ],
            id:"",
            barang: "",
            harga: "",
            jumlah: "",
            total:"",
            action: ""
        }
    }
    bind = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    
    hitung = (event) =>{
        var banyak = this.state.stok
       
        const total = banyak.reduce((total,barang) => {
           return total+(barang.harga * barang.jumlah)
        }, 0);
        this.setState({total : total})
    }

    SaveStok = (event) => {
        event.preventDefault();
        let temp = this.state.stok

        if(this.state.action === "insert") {
            temp.push({
                    id: this.state.id,
                    barang: this.state.barang,
                    harga: this.state.barang,
                    jumlah: this.state.jumlah,
                    total: this.state.total
            });
        }else if(this.state.action === "update") {
            let index = temp.findIndex(item => item.id === this.state.id);
            temp[index].barang  = this.state.barang;
            temp[index].harga   = this.state.harga;
            temp[index].jumlah  = this.state.jumlah;
            temp[index].total = this.state.total;
            }
            this.setState({stok:temp});

            $("#modal").modal('hide');
        }

        Add = () => {
            this.setState({
                id : "",
                barang : "",
                harga : "",
                jumlah: "",
                action : "insert"
            });
        }
        
        Edit = (item) => {
            this.setState({
                id : item.id,
                barang : item.barang,
                harga : item.harga,
                jumlah: item.jumlah,
                action : "update"
            });
        }
        Drop = (index) =>{
            let temp = this.state.stok;

            temp.splice(index,1);

            this.setState({stok: temp})
        }
    render() {
        return (
            <div className="container">
                <ul className="list-group">
                    {this.state.stok.map((item, index) => {
                        return (
                            <li className="list-group-item" key={index}>
                                <h6>ID : {item.id}</h6>
                                <h5 className="text-info">{item.barang}</h5>
                                <h6>Harga: {item.harga}</h6>
                                <h6>Jumlah: {item.jumlah}</h6>
                                <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}
                                    data-toggle="modal" data-target="#modal">
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>
                                    Hapus
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <div>
                    <button className="btn btn-sm btn-primary m-3" onClick={() => this.hitung()}>
                        Hitung
            	    </button>
                    <h4>Total Belanja :</h4>
                    <input type="text" name="total" className="form-control" value={this.state.total} disabled></input>
                </div>
                <button className="btn btn-sm btn-success m-3" onClick={this.Add}
                    data-toggle="modal" data-target="#modal">
                    Tambah Data
	        </button>
                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>Tambah Barang</h5>
                            </div>
                            <form onSubmit={this.SaveStok}>
                                <div className="modal-body">
                                    ID
                                    <input type="text" name="id" className="form-control" onChange={this.bind}
                                    value={this.state.id} />
                                    Barang
                                    <input type="text" name="barang" className="form-control" onChange={this.bind}
                                    value={this.state.barang} />
	                                Harga
	                                <input type="text" name="harga" className="form-control" onChange={this.bind}
                                    value={this.state.harga} />
	                                Jumlah
	                                <input type="text" name="jumlah" className="form-control" onChange={this.bind}
                                    value={this.state.jumlah} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">
                                        Simpan
	                </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );  
 }  
}
export default Toko;