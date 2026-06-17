import React from 'react';
import { useParams } from "react-router-dom";
import users from "../data/users";
function UserProfile(props) {

    const { id } = useParams();
    const user = users.find((u) => u.id === Number(id));
    if (!user) {
        return <h2>User Not found</h2>;
    }

    return (
        <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center">
                <img
                    src="https://ui-avatars.com/api/?size=150"
                    alt={`${user.firstName} ${user.lastName}`}
                    className="rounded-circle mb-3"
                    width="120"
                    height="120"
                    style={{
                        objectFit: "cover",
                    }}
                />

                <h5 className="card-title mb-1">
                    {user.firstName} {user.lastName}
                </h5>

                <p className="text-muted mb-2">
                    @{user.username}
                </p>

                <span
                    className={`badge mb-3 ${user.status === "active"
                        ? "bg-success"
                        : user.status === "inactive"
                            ? "bg-warning text-dark"
                            : "bg-danger"
                        }`}
                >
                    {user.status}
                </span>

                <div className="text-start">
                    <p className="mb-2">
                        <strong>Email:</strong>
                        <br />
                        {user.email}
                    </p>

                    <p className="mb-2">
                        <strong>Phone:</strong>
                        <br />
                        {user.phone}
                    </p>

                    <p className="mb-2">
                        <strong>Role:</strong>
                        <br />
                        <span className="text-capitalize">
                            {user.role}
                        </span>
                    </p>

                    <p className="mb-2">
                        <strong>Location:</strong>
                        <br />
                        {user.address.city}, {user.address.country}
                    </p>
                </div>
            </div>

            <div className="card-footer bg-white border-0">
                <div className="row text-center">
                    <div className="col">
                        <h6>{user.ordersCount}</h6>
                        <small className="text-muted">Orders</small>
                    </div>

                    <div className="col">
                        <h6>{user.wishlistCount}</h6>
                        <small className="text-muted">Wishlist</small>
                    </div>
                </div>

                <button className="btn btn-primary w-100 mt-3">
                    View Profile
                </button>
            </div>
        </div>
    );
}

export default UserProfile;