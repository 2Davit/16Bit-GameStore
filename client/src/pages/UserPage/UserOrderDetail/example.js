<StyledOrderDetail>
  <h2 className="mb-1">Order #{orderDetail.id_order}</h2>
  <div className="tables-container">
    <div>
      <h3>Order Details</h3>
      <table className="table-small">
        <tbody>
          <tr>
            <td>Date:</td>
            <td>{orderDetail.date.split("T")[0]}</td>
          </tr>
          <tr>
            <td>Total amount:</td>
            <td>${orderDetail.amount_order}</td>
          </tr>
          <tr>
            <td>Status</td>
            <td>{orderDetail.status_order}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h3>Products</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orderDetail.orderProduct &&
            orderDetail.orderProduct.map((index) => {
              return (
                <tr key={index.id}>
                  <td>{index.product.name_product}</td>
                  <td>{index.quantity}</td>
                  <td>${index.product.price_product}</td>
                  <td>${index.quantity * index.product.price_product}</td>
                  <td>
                    <Link to={`/review/${user.id}?game=${index.id}`}>
                      <button>Leave a review for this game</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Total: ${orderDetail?.amount_order}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
  <Btn className="btn btn-ppal mt-2" onClick={() => history.push("/orders")}>
    <i className="fas fa-caret-left"></i> Go back
  </Btn>
</StyledOrderDetail>;
