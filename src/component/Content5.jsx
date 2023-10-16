function Content5() {
    return (
        <>
        <div id="form">
            <h2>Daftar Membership</h2>            
            <form>
                <label>Nama</label>
                <input id="name" type="text"/>
                <label>Alamat</label> 
                <input id="city" type="text"/>
                <label>Email</label>
                <input id="email" type="email"/>
                <label>Kode Pos</label>
                <input id="zip-code" type="number"/>
                <div className="checkbox">
                <input id="status" type="checkbox"/>
                <label id="check">Dengan ini saya menyatakan data yang diisi pada form ini adalah benar dan telah sesuai</label>
                </div>
                <button id="submit-form" type="submit">Daftar</button>
                <div id="warning"> </div>
            </form>
        </div>
        </>
    );
}

export default Content5
