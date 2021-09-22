import React, { useState } from 'react'

function Todo(props) {

    // const [makeTodo, setMakeTodo] = useState()
    const todo = props.todo

    const [tit, setTitle] = useState({
        title: "", desc: ""
    })


    const [upDate, setUpdateId] = useState()

    const textHandle = (e) => {
        const name = e.target.name
        const value = e.target.value

        setTitle({ ...tit, [name]: value })
    }

    const addTodo = (e) => {
        e.preventDefault()
        if (!tit.title || !tit.desc) {
            alert("Please make todo properly")
        }
        else {
            props.addContacHandler(tit)
            setTitle({ title: "", desc: "" })
        }
    }

    const deleteValue = (delId) => {
        props.delteById(delId)
    }

    const updateTdod = (elem) => {
        setTitle({ title: elem.title, desc: elem.desc })
        setUpdateId(elem)
    }


    const updateSetTodo = (e) => {
        e.preventDefault()
        if (!tit.title || !tit.desc) {
            alert("you cannot update empty document")
        }
        else {
            props.updateById({ ...tit, id: upDate.id })
        }

    }

    return (
        <div className="container">

            <form action="">
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">@Qoute</span>
                    <input type="text" class="form-control" placeholder=" Quote by ..." aria-label="Recipient's username" aria-describedby="basic-addon1" name="title" value={tit.title} onChange={textHandle} />

                </div>

                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder=" Quote by ..." aria-label="Recipient's username" aria-describedby="basic-addon2" name="desc" value={tit.desc} onChange={textHandle} />
                    <span class="input-group-text" id="basic-addon2">@person name</span>
                </div>

                <div className="btnSet ">
                    <button type="submit" class="btn btn-primary " onClick={addTodo}>add todo</button>
                    <button type="submit" class="btn btn-info " onClick={updateSetTodo}>update todo</button>
                </div>
            </form>

            {/* divider */}
            <div className="divider"></div>

            <div className="todoList">
                <h1 className="title">Todo List</h1>

                {
                    todo.length ? todo.map((elem) => {

                        return (
                            <div className="titleset" key={elem.id}>
                                <div class="card">
                                    <div class="card-header">
                                        Quote
                                    </div>
                                    <div class="card-body">
                                        <blockquote class="blockquote mb-0">
                                            <p>{elem.title}.</p>
                                            <footer class="blockquote-footer">{elem.desc} <cite title="Source Title">Source Title</cite></footer>
                                        </blockquote>

                                        <button className="btn btn-danger" onClick={() => deleteValue(elem.id)}>delete</button>

                                        <button className="btn btn-success" onClick={() => updateTdod(elem)}>update</button>
                                    </div>
                                </div>

                            </div>
                        )
                    }) : <h3 className="text-center text-white ">Todo List is empty</h3>
                }
            </div>
        </div>
    )
}

export default Todo
